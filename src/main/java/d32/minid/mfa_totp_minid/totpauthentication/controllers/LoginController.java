package d32.minid.mfa_totp_minid.totpauthentication.controllers;


import d32.minid.mfa_totp_minid.model.Utils;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class LoginController {

    @Autowired
    Utils utils;

    @GetMapping("/loginn")
    public String login(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session, Model model) {
        if(utils.sessionContainsPid(session)) {
            return "redirect:/mfa";
        }
        return "loginn";
    }
    @PostMapping("/loginn")
    public String loginPost(String pid, String password, HttpSession session, Model model) {

        if(!utils.userExists(pid)) {
            model.addAttribute("loginError", "Invalid username or password");
            return "loginn";
        }
        if (utils.userIsQuarantined(pid)) {
            model.addAttribute("quarantineError", "Account is quarantined");
            return "loginn";
        }
        if (utils.loginSuccess(pid, password)) {
            session.setAttribute("PID", pid);
            return "redirect:/mfa";
        }
        if(utils.userErrorCounterExceeded(pid)) {
            utils.quarantineUser(pid);
        }
        model.addAttribute("loginError", "Invalid username or password");
        return "loginn";
    }
}
