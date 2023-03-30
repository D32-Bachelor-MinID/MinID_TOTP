package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.security.SessionHandler;
import d32.minid.mfa_totp_minid.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SettingsController {
    @Autowired
    UserRepository userRepository;
    @GetMapping("/settings")
    public String settings(HttpSession session, @RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, Model model) {
        OAuth2AccessToken accessToken = authorizedClient.getAccessToken();
        SessionHandler sessionHandler = new SessionHandler(session);
        System.out.println("access token: " + accessToken.getTokenValue());

        if (!sessionHandler.hasAttribute(session)) {
            session.invalidate();
            return "redirect:/";
        }

        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfa = user.getMfa_method();

        switch (mfa) {
            case "OTC":
                // TODO hent telefonnummer fra KRR api og vis det
                mfa = "KODE PÅ SMS (" + "99999999" + ")";
                break;
            case "APP":
                mfa = "MinID-app";
                break;
            default:
                mfa = "None";
        }
        model.addAttribute("mfa", mfa);
        // TODO - hent telefonnummer fra KRR api og legg til i model
        System.out.println(session.getAttribute("PID"));
        System.out.println(session.getId());
        return "settings";
    }
}
