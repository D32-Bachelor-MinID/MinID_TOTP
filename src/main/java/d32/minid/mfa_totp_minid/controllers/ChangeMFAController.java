package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class ChangeMFAController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/mfa_options")
    public String changeMFA(HttpSession session, @RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient,Model model) {
        String phone = "99887766";
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfaMethod = user.getMfa_method();



        boolean otc = false;
        boolean totp = false;
        boolean app = false;

        switch (mfaMethod) {
            case "OTC" -> otc = true;
            case "TOTP" -> totp = true;
            case "APP" -> app = true;
        }

        System.out.println("MFA: " + mfaMethod);
        System.out.println("OTC: " + otc);
        System.out.println("TOTP: " + totp);
        System.out.println("APP: " + app);

        model.addAttribute("chosen-mfa", mfaMethod);
        model.addAttribute("otc", otc);
        model.addAttribute("totp", totp);
        model.addAttribute("app", app);
        model.addAttribute("phone", phone);

        return "mfa_options";
    }
}