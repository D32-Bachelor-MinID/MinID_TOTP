package d32.minid.mfa_totp_minid.totpauthentication.controllers;

import d32.minid.mfa_totp_minid.model.DAO.User;
import d32.minid.mfa_totp_minid.model.Utils;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.Objects;

@Controller
public class MFAController {
    @Autowired
    Utils utils;

    @GetMapping("/mfa")
    public String mfa(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session, Model model) {
        User user = utils.getUser(session);
        String mfa_method = user.getMfa_method();
        model.addAttribute("user", user);
        model.addAttribute("mfa_method", mfa_method);
        return "mfa";
    }
    @PostMapping("/mfa")
    public String mfaPost(String otc, HttpSession session, Model model, String mfa, String submit) {
        if (Objects.equals(submit, "cancel")) {
            session.removeAttribute("PID");
            return "redirect:/loginn";
        }
        User user = utils.getUser(session);
        if (utils.userIsQuarantined(user.getPid())) {
            model.addAttribute("Error", "Account is quarantined");
            return "mfa";
        }
        model.addAttribute("mfa_method", user.getMfa_method());
        if (user.getMfa_method().equals("OTC")) {
            if (otc.equals("otc12")) {
                utils.otcSuccess(user);
                return "redirect:/settings";
            }
            model.addAttribute("otcError", "Invalid OTC");
            utils.mfaErrorIncrement(user);
            if (user.getMfa_error_counter() >= 3) {
                utils.quarantineUser(user.getPid());
                model.addAttribute("Error", "Account is quarantined");
                model.addAttribute("user", user);
                return "mfa";
            }
        } else if (user.getMfa_method().equals("TOTP")) {
            if(utils.totpSuccess(user, mfa)) {
                return "redirect:/settings";
            }
            model.addAttribute("totpError", "Invalid TOTP");
            if (user.getMfa_error_counter() >= 3) {
                utils.quarantineUser(user.getPid());
                model.addAttribute("quarantineError", "Account is quarantined");
            }
        }
        model.addAttribute("user", user);
        model.addAttribute("Error", "Invalid " + mfa);
        return "mfa";
    }
}