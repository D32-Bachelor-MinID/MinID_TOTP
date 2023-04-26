package d32.minid.mfa_totp_minid;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenservices.DAO.user.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static java.util.UUID.randomUUID;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestUserRepository {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CryptoRepository cryptoRepository;
    @Before
    public void setUp() {
         if(userRepository.findByPid("09123122938") != null) {
             User user = userRepository.findByPid("09123122938");
             if (cryptoRepository.findByUuid(user.getUuid()) != null) {
                 cryptoRepository.delete(cryptoRepository.findByUuid(user.getUuid()));
             }
           userRepository.delete(userRepository.findByPid("09123122938"));
        }
        String password = "password";
        String bcryptHashString = BCrypt.withDefaults().hashToString(12, password.toCharArray());
        User user1 = new User(randomUUID().toString(), "09123122938", "AKTIVERINGSBREV", "NEW_USER", "LOW", "OTC", bcryptHashString, 0, 0, 0, 0, 0, 0);
        userRepository.save(user1);

    }
    @Test
    public void testFetchData(){
        User userA = userRepository.findByPid("09123122938");
        assertNotNull(userA);
    }
    
    @Test
    public void verifyPasswordHashTest() {
        User usera = userRepository.findByPid("09123122938");
        String password = "password";
        assertTrue(BCrypt.verifyer().verify(password.toCharArray(), usera.getPassword()).verified);
    }

}
