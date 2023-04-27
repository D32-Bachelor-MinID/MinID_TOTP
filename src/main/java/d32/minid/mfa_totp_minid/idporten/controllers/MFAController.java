package d32.minid.mfa_totp_minid.idporten.controllers;

import d32.minid.mfa_totp_minid.idportenservices.crypto.Crypto;
import d32.minid.mfa_totp_minid.idportenservices.utils.totp.Totp;
import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenservices.utils.security.Validator;
import d32.minid.mfa_totp_minid.idportenservices.utils.totp.timeprovider.TimeProvider;
import d32.minid.mfa_totp_minid.idportenservices.user.User;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Objects;

@Controller
public class MFAController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CryptoRepository cryptoRepository;

    @GetMapping("/mfa")
    public String mfa(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session, Model model) {
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfa_method = user.getMfa_method();
        model.addAttribute("mfa_method", mfa_method);
        return "mfa";
    }
    @PostMapping("/mfa")
    public String mfaPost(String otc, HttpSession session, Model model, String mfa, String submit) {
        if (Objects.equals(submit, "cancel")) {
            session.removeAttribute("PID");
            return "redirect:/loginn";
        }
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        model.addAttribute("mfa_method", user.getMfa_method());
        if (user.getMfa_method().equals("OTC")) {
            if (otc.equals("otc12")) return "redirect:/settings";
            model.addAttribute("otcError", "Invalid OTC");
        } else if (user.getMfa_method().equals("TOTP")) {
            Validator validator = new Validator(new Totp(), new TimeProvider());
            Crypto crypto = cryptoRepository.findByUuid(user.getUuid());
            if(validator.validTotp(crypto, mfa)) {
                crypto.setPrevinput(mfa);
                cryptoRepository.save(crypto);
                return "redirect:/settings";
            }
            model.addAttribute("totpError", "Invalid TOTP");
        }
        model.addAttribute("Error", "Invalid " + mfa);
        return "mfa";
    }
}