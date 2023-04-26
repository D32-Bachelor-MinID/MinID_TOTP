package d32.minid.mfa_totp_minid.idporten.controllers;

import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenservices.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TotpRemoveController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/totpRemove")
    public String totpRemove() {
        return "totpRemove";
    }
    @PostMapping("/totpRemove")
    public String totpRemovePost(HttpSession session) {
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        user.setMfa_method("OTC");
        return "redirect:/mfa_options";
    }
}
