package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.user.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static java.util.UUID.randomUUID;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestUserRepository {
    @Autowired
    private UserRepository userRepository;
    @Before
    public void setUp() {
        User user1 = new User(randomUUID().toString(), "091231209381", "AKTIVERINGSBREV", "NEW_USER", "LOW", "OTC", "password", 0, 0, 0, 0, 0, 0);
        userRepository.save(user1);
    }
    @Test
    public void testFetchData(){
        User userA = userRepository.findByUuid("098");
        assertNotNull(userA);
    }

}
