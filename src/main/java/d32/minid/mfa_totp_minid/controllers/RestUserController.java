package d32.minid.mfa_totp_minid.controllers;

import com.nimbusds.jose.shaded.gson.Gson;
import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestUserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/user/{pid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getUser(@PathVariable String pid){

        User user = userRepository.findByPid(pid);
        return new Gson().toJson(user);
    }

    //@PutMapping(Value)
    public void updateUser(@RequestBody User updatedUser){

    }
}
