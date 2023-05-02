package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.qrcode.QrData;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.qrcode.QrGenerator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QrDataTest {

    private QrGenerator generator;
    private QrData qrtest;
    private QrData qrtest256;
    private QrData qrtest512;

    private final String key = "HMZARLOXOJHZ2FVAQMKDMO6L3O627AFR";
    @Before
    public void setUp() {
        qrtest = new QrData("totp", "11223312345", key, "DigDir MinID/SHA1", "SHA1", 6, 30);
        qrtest256 = new QrData("totp", "11223312345", key, "DigDir MinID/SHA256", "SHA256", 6, 30);
        qrtest512 = new QrData("totp", "11223312345", key, "DigDir MinID/SHA512", "SHA512", 6, 30);
        generator = new QrGenerator();
    }
    @Test
    public void testGenerator() throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(generator.generate(qrtest));
        BufferedImage bImage = ImageIO.read(bis);
        ImageIO.write(bImage, "png", new File("qrPic.png")); //generer en PNG for qrkode-testing
        bis = new ByteArrayInputStream(generator.generate(qrtest256));
        bImage = ImageIO.read(bis);
        ImageIO.write(bImage, "png", new File("qrPic256.png")); //generer en PNG for qrkode-testing
        bis = new ByteArrayInputStream(generator.generate(qrtest512));
        bImage = ImageIO.read(bis);
        ImageIO.write(bImage, "png", new File("qrPic512.png")); //generer en PNG for qrkode-testing
        assertEquals(qrtest.getUri(), "otpauth://totp/11223312345?secret="+key+"&issuer=DigDir%20MinID%2FSHA1&algorithm=SHA1&digits=6&period=30");
    }
}
