package d32.minid.mfa_totp_minid.kkr;


import java.util.Objects;

public class User {
    String personidentifikator;
    Boolean reservasjon;
    String status;
    String varslingsstatus;
    Kontaktinformasjon kontaktinformasjon;
    DigitalPost digital_post;
    String sertifikat;
    String spraak;
    String spraak_oppdatert;


    public User(String personidentifikator, Kontaktinformasjon kontaktinformasjon) {
        this.personidentifikator = personidentifikator;
        this.kontaktinformasjon = kontaktinformasjon;
    }

    public String getPersonidentifikator() {
        return personidentifikator;
    }

    public void setPersonidentifikator(String personidentifikator) {
        this.personidentifikator = personidentifikator;
    }

    public Kontaktinformasjon getKontaktinformasjon() {
        return kontaktinformasjon;
    }

    public void setKontaktinformasjon(Kontaktinformasjon kontaktinformasjon) {
        this.kontaktinformasjon = kontaktinformasjon;
    }
}
