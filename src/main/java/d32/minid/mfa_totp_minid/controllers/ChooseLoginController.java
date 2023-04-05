package d32.minid.mfa_totp_minid.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ChooseLoginController {
    @GetMapping("/chooseLogin")
    public String chooseLogin() {
        return "chooseLogin";
    }
}
