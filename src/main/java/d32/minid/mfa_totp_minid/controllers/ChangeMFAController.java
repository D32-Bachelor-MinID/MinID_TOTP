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
import org.springframework.web.bind.annotation.RequestParam;

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
        //display sms
        //display app if registered else blank
        //display totp if registered else link to register

        model.addAttribute("chosen-mfa", mfaMethod);
        model.addAttribute("otc", otc);
        model.addAttribute("totp", totp);
        model.addAttribute("app", app);
        model.addAttribute("phone", phone);


        System.out.println("get mfa_options");
        return "mfa_options";
    }

    @PostMapping("/mfa_options")
    public String changeMFA(HttpSession session,
                            @RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient,
                            @RequestParam("mfa") String mfa) {

        System.out.println("post mfa_options");
        System.out.println("MFA: " + mfa);


        return "redirect:/settings";
    }
}