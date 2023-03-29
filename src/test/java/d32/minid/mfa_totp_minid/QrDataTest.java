package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.qrcode.QrData;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QrDataTest {

    private QrData qrtest;
    @Before
    public void setUp() {
        qrtest = new QrData("totp", "testesen@test.com", "secretkey", "DigDir MinID", "SHA1", 6, 30);
    }
    @Test
    public void testGenerator() {
        assertEquals(qrtest.getUri(), "otpauth://totp/testesen%40test.com?secret=secretkey&issuer=DigDir%20MinID&algorithm=SHA1&digits=6&period=30");
    }
}
