package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.Totp;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestTotp {
    private long testTime[] = {59L, 1111111109L, 1111111111L,
            1234567890L, 2000000000L, 20000000000L};
    private long timePeriod = 30;
    // Seed for HMAC-SHA1 - 20 bytes
    private String seed = "3132333435363738393031323334353637383930";
    // Seed for HMAC-SHA256 - 32 bytes
    private String seed32 = "3132333435363738393031323334353637383930" +
            "313233343536373839303132";
    // Seed for HMAC-SHA512 - 64 bytes
    private String seed64 = "3132333435363738393031323334353637383930" +
            "3132333435363738393031323334353637383930" +
            "3132333435363738393031323334353637383930" +
            "31323334";
    private String[] sha1TOTP = {"606420", "822039", "328157", "745020", "057504", "540616"};
    private String[] sha256TOTP = {"382789", "909184", "051878", "296445", "060258", "852705"};
    private String[] sha512TOTP = {"663803", "497119", "166168", "594927", "153970", "789565"};

    Totp totp;
    @Before
    public void setUp(){
        totp = new Totp();
    }
    @Test
    public void testSha1(){
        long T0 = 0;
        String steps = "0";

        for(int i = 0; i < testTime.length; i++){
            long T = (testTime[i] - T0)/timePeriod;
            steps = Long.toHexString(T).toUpperCase();
            while(steps.length() < 16){
                steps = "0" + steps;
            }
            assertEquals(sha1TOTP[i], totp.generateTOTP(seed, steps, "6"));
        }
    }

    @Test
    public void testSha256(){
        long T0 = 0;
        String steps = "0";

        for(int i = 0; i < testTime.length; i++){
            long T = (testTime[i] - T0)/timePeriod;
            steps = Long.toHexString(T).toUpperCase();
            while(steps.length() < 16){
                steps = "0" + steps;
            }
            assertEquals(sha256TOTP[i], totp.generateTOTP256(seed32, steps, "6"));
        }
    }

    @Test
    public void testSha512(){
        long T0 = 0;
        String steps = "0";

        for(int i = 0; i < testTime.length; i++){
            long T = (testTime[i] - T0)/timePeriod;
            steps = Long.toHexString(T).toUpperCase();
            while(steps.length() < 16){
                steps = "0" + steps;
            }
            assertEquals(sha512TOTP[i], totp.generateTOTP512(seed64, steps, "6"));
        }
    }
}
