package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.Crypto;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.Totp;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.security.Validator;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.timeprovider.MockTimeProvider;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ValidatorTest {
    final String generatedAtSetTime = "397968";
    final String generatedBeforeSetTime = "352277";
    final String secret = "HMZARLOXOJHZ2FVAQMKDMO6L3O627AFR";

    Validator validator;

    @Before
    public void setUp() {
        MockTimeProvider mockTime = new MockTimeProvider();
        mockTime.setTime(2000000000L);
        Totp totp = new Totp();
        validator = new Validator(totp, mockTime);
    }

    @Test
    public void shouldValidate() {
        assertTrue(validator.isCorrectTotp(secret, generatedAtSetTime));
    }

    @Test
    public void shouldValidateOlderPeriod() {
        assertTrue(validator.isCorrectTotp(secret, generatedBeforeSetTime));
    }

    @Test
    public void shouldNotApproveRepeat() {
        Crypto crypto = new Crypto("NA", secret, "123123");
        assertFalse(validator.validTotp(crypto, "123123"));
    }

    @Test
    public void shouldApproveNewCodes() {
        Crypto crypto = new Crypto("NA", secret, "123123");
        assertTrue(validator.validTotp(crypto, "397968"));
    }
}