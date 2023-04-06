package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TotpInitController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CryptoRepository cryptoRepository;

    @GetMapping("/totpInit")
    public String totpinit() {
        return "totpinit";
    }
}
