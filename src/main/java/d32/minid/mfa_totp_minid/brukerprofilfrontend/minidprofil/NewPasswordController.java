package d32.minid.mfa_totp_minid.brukerprofilfrontend.minidprofil;

import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.security.Validator;
import d32.minid.mfa_totp_minid.idportenbackend.utils.Utils;
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
public class NewPasswordController {

    @Autowired
    Utils utils;
    @GetMapping("/newpassword")
    public String newpassword(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession sess) {
        if (!utils.sessionContainsPid(sess)) {
            return "redirect:/loginn";
        }
        return "newpassword";
    }

    @PostMapping("/newpassword")
    public String newpasswordPost(String passwordOld, String password, String password2, Model model, HttpSession session) {
        Validator validator = new Validator();
        if (!validator.validPassword(utils.getUser(session), passwordOld)){
            model.addAttribute("Error", "Incorrect password");
            return "newpassword";
        }
        if (!Objects.equals(password, password2)) {
            model.addAttribute("Error", "Passwords do not match");
            return "newpassword";
        }
        if (password.length() < 8) {
            model.addAttribute("Error", "Password must be at least 8 characters long");
            return "newpassword";
        }
        if (validator.validPassword(utils.getUser(session), password2)){
            model.addAttribute("Error", "New password must be different from old password");
            return "newpassword";
        }
        utils.updatePassword(session, password);
        return "redirect:/settings";
    }
}
