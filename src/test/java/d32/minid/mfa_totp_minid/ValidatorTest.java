package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.crypto.Totp;
import d32.minid.mfa_totp_minid.security.Validator;
import d32.minid.mfa_totp_minid.time.TimeProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/*@RunWith(SpringRunner.class)
@SpringBootTest*/
public class ValidatorTest {

/*    @Test
    public void testisCorrectTotp() {
        String secret = "HMZARLOXOJHZ2FVAQMKDMO6L3O627AFR";
        int timePeriod = 30;
        long testTime = 2000000000L;
        String correctCode = "057504";

        assertTrue(isCorrectTotp(secret, correctCode, testTime));
        assertTrue(isCorrectTotp(secret, correctCode, testTime - timePeriod));

    }*/

    private boolean isCorrectTotp(String secret, String userCode, long time) {
        TimeProvider tp = mock(TimeProvider.class);
        when(tp.getTime()).thenReturn(time);

        Validator validator = new Validator(new Totp(), tp);
        return validator.isCorrectTotp(secret, userCode);
    }
}
