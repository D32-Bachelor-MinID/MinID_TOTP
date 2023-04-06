package d32.minid.mfa_totp_minid.qrcode;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.Writer;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import d32.minid.mfa_totp_minid.crypto.DefaultKeyGenerator;
import d32.minid.mfa_totp_minid.user.User;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class QrGenerator {
    private int qrImageSize = 350;
    private final Writer writer;

    public QrGenerator() {
        this(new QRCodeWriter());
    }

    public QrGenerator(Writer writer) {
        this.writer = writer;
    }

    public int getQrImageSize() {
        return qrImageSize;
    }

    public void setQrImageSize(int qrImageSize) {
        this.qrImageSize = qrImageSize;
    }

    public QrData qrSetup(User user){
        DefaultKeyGenerator keyGenerator = new DefaultKeyGenerator();
        String secret = keyGenerator.generate();
        return new QrData("totp", user.getPid(), secret, "MinID", "SHA1", 6, 30);
    }

    public byte[] generate(QrData data) {
        try {
            BitMatrix bitMatrix = writer.encode(data.getUri(), BarcodeFormat.QR_CODE, qrImageSize, qrImageSize);
            ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutputStream);
            return pngOutputStream.toByteArray();
        } catch (WriterException | IOException e) {
            throw new RuntimeException(e);
        }
    }
}
