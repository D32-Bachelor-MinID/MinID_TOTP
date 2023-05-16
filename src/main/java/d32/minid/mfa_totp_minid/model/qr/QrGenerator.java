package d32.minid.mfa_totp_minid.model.qr;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.Writer;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import d32.minid.mfa_totp_minid.model.DAO.User;
import org.apache.commons.codec.binary.Base64;

import java.io.ByteArrayOutputStream;
import java.io.IOException;


public class QrGenerator {
    private Base64 base64;
    private int qrImageSize = 350;
    private final Writer writer;

    public QrGenerator() {
        this(new QRCodeWriter());
        base64 = new Base64();
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

    /**
     * This method instantiates a QrData object based on user from parameter
     * and standard TOTP configurations.
     *
     * @param user
     * @return new QrData object
     */
    public QrData qrSetup(User user){
        DefaultKeyGenerator keyGenerator = new DefaultKeyGenerator();
        String secret = keyGenerator.generate();
        return new QrData("totp", user.getPid(), secret, "MinID", "SHA1", 6, 30);
    }

    /**
     * This method generates a byte array for the PNG representation
     * of QrData given from parameters.
     *
     * @param data
     * @return a byte array for the PNG
     */
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

    /**
     * This method generates a Uri for the qr code image
     * from given set of parameters.
     * The Uri can be inserted directly with Thymeleaf.
     *
     * @param qrData
     * @param type
     * @return Qr code image in form of a Uri
     */
    public String getUriForImage(QrData qrData, String type){
        return String.format("data:%s;base64,%s", type, new String(base64.encode(generate(qrData))));
    }
}
