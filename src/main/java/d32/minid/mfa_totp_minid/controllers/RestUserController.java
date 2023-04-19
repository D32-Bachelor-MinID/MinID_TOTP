package d32.minid.mfa_totp_minid.controllers;

import com.nimbusds.jose.shaded.gson.Gson;
import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class RestUserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/user/{pid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getUser(@PathVariable String pid){

        User user = userRepository.findByPid(pid);
        return new Gson().toJson(user);
    }

    @PutMapping(value = "/user/{pid}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateUser(@RequestBody User updatedUser){
        userRepository.save(updatedUser);
    }

    @GetMapping(value = "/user/tlf", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getUserTlf(){
        //Placeholder for KRR
        return "99999999";
    }

    @GetMapping(value = "/user/device", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getUserDevice(){
        //Placeholder for "https://minid-ver2.difi.no/minid-backend-service/device"
        return "Doro modell murstein";
    }
}
