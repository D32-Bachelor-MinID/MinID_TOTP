package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.qrcode.QrData;
import d32.minid.mfa_totp_minid.qrcode.QrGenerator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QrDataTest {

    private QrGenerator generator;
    private QrData qrtest;
    @Before
    public void setUp() {
        qrtest = new QrData("totp", "testesen@test.com", "secretkey", "DigDir MinID", "SHA1", 6, 30);
        generator = new QrGenerator();
    }
    @Test
    public void testGenerator() throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(generator.generate(qrtest));
        BufferedImage bImage = ImageIO.read(bis);
        ImageIO.write(bImage, "png", new File("qrPic.png"));
        assertEquals(qrtest.getUri(), "otpauth://totp/testesen%40test.com?secret=secretkey&issuer=DigDir%20MinID&algorithm=SHA1&digits=6&period=30");
    }
}
