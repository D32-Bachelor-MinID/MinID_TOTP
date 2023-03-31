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
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MFAController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/mfa")
    public String mfa(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session, Model model) {
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfa_method = user.getMfa_method();
        model.addAttribute("mfa_method", mfa_method);
        return "mfa";
    }
    @PostMapping("/mfa")
    public String mfaPost(String otc, HttpSession session, Model model, String mfa) {
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        model.addAttribute("mfa_method", user.getMfa_method());
        if (user.getMfa_method().equals("OTC")) {
            if (otc.equals("otc12")) return "redirect:/settings";
            model.addAttribute("otcError", "Invalid OTC");
        } else if (user.getMfa_method().equals("TOTP")) {
            //TODO validate TOTP
            return "redirect:/settings";
        }
        model.addAttribute("Error", "Invalid " + mfa);
        return "mfa";
    }
}
