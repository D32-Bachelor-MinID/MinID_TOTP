package d32.minid.mfa_totp_minid.qrcode;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class QrData {

    private final String type;
    private final String label;
    private final String secret;
    private final String issuer;
    private final String algorithm;
    private final int digits;
    private final int period;

    /**
     *
     * @param type Spesifies use case hotp/totp
     * @param label account name
     * @param secret secret key
     * @param issuer Service provider (MinID)
     * @param algorithm Hashing method SHA1/SHA256/SHA512
     * @param digits passcode length
     * @param period passcode refresh-rate
     */
    public QrData(String type, String label, String secret, String issuer, String algorithm, int digits, int period) {
        this.type = type;
        this.label = label;
        this.secret = secret;
        this.issuer = issuer;
        this.algorithm = algorithm;
        this.digits = digits;
        this.period = period;
    }

    public String getType() {
        return type;
    }

    public String getLabel() {
        return label;
    }

    public String getSecret() {
        return secret;
    }

    public String getIssuer() {
        return issuer;
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public int getDigits() {
        return digits;
    }

    public int getPeriod() {
        return period;
    }

    public String getUri() {
        return "otpauth://" +
                uriEncode(type) + "/" +
                uriEncode(label) +
                "?secret=" + uriEncode(secret) +
                "&issuer=" + uriEncode(issuer) +
                "&algorithm=" + uriEncode(algorithm) +
                "&digits=" + digits +
                "&period=" + period;
    }

    private String uriEncode(String s) {
        if(s == null){
            return "";
        }

        try{
            return URLEncoder.encode(s, StandardCharsets.UTF_8.toString()).replaceAll("\\+", "%20");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("Could not URI encode QrData");
        }

    }
}
