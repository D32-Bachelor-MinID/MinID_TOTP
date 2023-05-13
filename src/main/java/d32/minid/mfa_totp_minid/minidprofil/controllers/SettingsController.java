package d32.minid.mfa_totp_minid.minidprofil.controllers;

import d32.minid.mfa_totp_minid.model.Utils;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SettingsController {
    @Autowired
    Utils utils;

    @GetMapping("/settings")
    public String settings(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session, Model model) {

        if (!utils.sessionContainsPid(session)) {
            session.invalidate();
            return "redirect:/";
        }

        String mfa = switch (utils.userMfaMethod(session)) {
            case "OTC" -> "KODE PÅ SMS (" + utils.userPhone(session) + ")";
            case "APP" -> "MinID-app";
            case "TOTP" -> "TOTP applikasjon";
            default -> "None";
        };

        model.addAttribute("changePhone", false);
        model.addAttribute("unit", "IPhone 13 - IOS 16.5 Public Beta 3");
        model.addAttribute("mfa", mfa);
        model.addAttribute("phone", utils.userPhone(session));
        return "settings";
    }




    @GetMapping("newPhone")
    public String newPhone(HttpSession session, Model model) {

        if (!utils.sessionContainsPid(session)) {
            session.invalidate();
            return "redirect:/";
        }

        String mfa = switch (utils.userMfaMethod(session)) {
            case "OTC" -> "KODE PÅ SMS (" + utils.userPhone(session) + ")";
            case "APP" -> "MinID-app";
            case "TOTP" -> "TOTP applikasjon";
            default -> "None";
        };

        model.addAttribute("changePhone", true);
        model.addAttribute("unit", "IPhone 13 - IOS 16.5 Public Beta 3");
        model.addAttribute("mfa", mfa);
        model.addAttribute("phone", utils.userPhone(session));
        return "settings";
    }
}
