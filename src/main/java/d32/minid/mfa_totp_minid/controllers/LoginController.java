package d32.minid.mfa_totp_minid.controllers;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Objects;

@Controller
public class LoginController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/")
    public String login() {
        System.out.println("Logincontroller");
        return "login";
    }
    @PostMapping("/login")
    public String loginPost(String pid, String password) {
        System.out.println("post login with pid: " + pid + " and password: " + password);
        User user = userRepository.findByPid(pid);
        System.out.println(user);
        if (Objects.nonNull(user) && BCrypt.verifyer().verify(password.toCharArray(), user.getPassword()).verified) {
            // create JWT token for the user and send it to the client

            return "redirect:/settings";
        }
        return "login?error=balle";
    }
    @GetMapping("/settings")
    public String settings() {
        return "settings";
    }
}
