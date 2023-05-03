package d32.minid.mfa_totp_minid.idportenfrontend.minid.minidauthentication;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;


@Controller
public class ChooseLoginController {
    @GetMapping("/")
    public String chooseLogin(Model model) {
        model.addAttribute("service", "Altinn");
        return "chooseLogin";
    }

    @GetMapping("/chooseLogin")
    public String chooseLogin2(Model model) {
        model.addAttribute("service", "Digitaliseringsdirektoratet");
        return "chooseLogin";
    }
}
