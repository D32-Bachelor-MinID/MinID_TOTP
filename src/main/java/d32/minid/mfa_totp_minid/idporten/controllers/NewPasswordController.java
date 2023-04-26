package d32.minid.mfa_totp_minid.idporten.controllers;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenservices.DAO.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NewPasswordController {

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/newpassword")
    public String newpassword(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient) {
        return "newpassword";
    }

    @PostMapping("/newpassword")
    public String newpasswordPost(String password, String password2, Model model, HttpSession session) {

        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        if (!password.equals(password2)) {
            model.addAttribute("Error", "Passwords do not match");
            return "redirect:/newpassword";
        }
        if (password.length() < 8) {
            model.addAttribute("Error", "Password must be at least 8 characters long");
            return "redirect:/newpassword";
        }
        if (BCrypt.verifyer().verify(password.toCharArray(), user.getPassword()).verified){
            model.addAttribute("Error", "New password must be different from old password");
            return "redirect:/newpassword";
        }
        return "redirect:/settings";
    }
}
