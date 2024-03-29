package d32.minid.mfa_totp_minid;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.model.DAO.Crypto;
import d32.minid.mfa_totp_minid.model.DAO.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.model.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.model.DAO.User;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static java.util.UUID.randomUUID;
import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CryptoTest {
    @Autowired
    private CryptoRepository cryptoRepository;
    @Autowired
    private UserRepository userRepository;
    private User user;
    @Before
    public void setUp(){
        user = userRepository.findByPid("12312312321");
        if(user == null){
            user = new User(randomUUID().toString(), "12312312321", "AKTIVERINGSBREV", "NEW_USER", "LOW", "TOTP",
                    BCrypt.withDefaults().hashToString(12, ("password").toCharArray()),
                    0, 0, 0L, 0L, 0L, 0L);
            userRepository.save(user);
            cryptoRepository.save(new Crypto(user.getUuid(), "HMZARLOXOJHZ2FVAQMKDMO6L3O627AFR", "112233"));
        }
    }

    @After
    public void finish(){
        user = userRepository.findByPid("12312312321");
        cryptoRepository.delete(cryptoRepository.findByUuid(user.getUuid()));
        userRepository.delete(user);
    }

    @Test
    public void previnputTest(){
        user = userRepository.findByPid("12312312321");
        String previnput = cryptoRepository.findByUuid(user.getUuid()).getPrevinput();
        assertEquals(previnput, "112233");
    }
}
