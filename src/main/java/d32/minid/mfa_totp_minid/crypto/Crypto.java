package d32.minid.mfa_totp_minid.crypto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "crypto")
public class Crypto {
    @Id
    private String uuid;
    private String secret;
    private String previnput;

    public Crypto(String uuid, String secret, String previnput){
        this.uuid = uuid;
        this.secret = secret;
        this.previnput = previnput;
    }
    public Crypto(){
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getPrevinput() {
        return previnput;
    }

    public void setPrevinput(String previnput) {
        this.previnput = previnput;
    }
}
