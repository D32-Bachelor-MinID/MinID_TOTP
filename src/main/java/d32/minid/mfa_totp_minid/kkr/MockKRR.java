package d32.minid.mfa_totp_minid.kkr;

import java.util.ArrayList;
import java.util.Objects;

public class MockKRR {
    static ArrayList<User> users = new ArrayList<User>();

    public static String findUser(String pid) {

        users.add(new User("12312312312", new Kontaktinformasjon("123", "12121212")));
        users.add(new User("11223312345", new Kontaktinformasjon("123", "11111111")));
        users.add(new User("09123122938", new Kontaktinformasjon("123", "09090909")));


        for (User user : users) {
            if (Objects.equals(user.personidentifikator, pid)) {
                return user.kontaktinformasjon.mobiltelefonnummer;
            }
        }
        return null;
    }

}
