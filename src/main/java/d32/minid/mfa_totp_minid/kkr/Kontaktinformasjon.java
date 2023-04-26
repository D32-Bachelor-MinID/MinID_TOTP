package d32.minid.mfa_totp_minid.kkr;

public class Kontaktinformasjon {

    private String epostadresse;
    private String epostadresse_oppdatert;
    private String epostadresse_sist_verifisert;
    String mobiltelefonnummer;
    private String mobiltelefonnummer_oppdatert;
    private String mobiltelefonnummer_sist_verifisert;


    public Kontaktinformasjon(String epostadresse, String mobiltelefonnummer) {
        this.epostadresse = epostadresse;
        this.mobiltelefonnummer = mobiltelefonnummer;
    }
}
