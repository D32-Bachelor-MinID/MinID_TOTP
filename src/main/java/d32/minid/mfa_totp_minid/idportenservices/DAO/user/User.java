package d32.minid.mfa_totp_minid.idportenservices.DAO.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name = "user")
public class User {
    @Id
    private String uuid;
    private String pid;
    private String source;
    private String user_state;
    private String security_level;
    private String mfa_method;
    private String password;
    private Integer password_error_counter;
    private Integer mfa_error_counter;
    private Integer quarantine_expiry_ms;
    private Integer profile_created_ms;
    private Integer profile_updated_ms;
    private Integer last_login_ms;

    public User() {
    }

    public User(String uuid, String pid, String source, String user_state, String security_level, String mfa_method, String password, Integer password_error_counter, Integer mfa_error_counter, Integer quarantine_expiry_ms, Integer profile_created_ms, Integer profile_updated_ms, Integer last_login_ms) {
        this.uuid = uuid;
        this.pid = pid;
        this.source = source;
        this.user_state = user_state;
        this.security_level = security_level;
        this.mfa_method = mfa_method;
        this.password = password;
        this.password_error_counter = password_error_counter;
        this.mfa_error_counter = mfa_error_counter;
        this.quarantine_expiry_ms = quarantine_expiry_ms;
        this.profile_created_ms = profile_created_ms;
        this.profile_updated_ms = profile_updated_ms;
        this.last_login_ms = last_login_ms;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }


    public String getUser_state() {
        return user_state;
    }

    public void setUser_state(String user_state) {
        this.user_state = user_state;
    }


    public String getSecurity_level() {
        return security_level;
    }

    public void setSecurity_level(String security_level) {
        this.security_level = security_level;
    }


    public String getMfa_method() {
        return mfa_method;
    }

    public void setMfa_method(String mfa_method) {
        this.mfa_method = mfa_method;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getPassword_error_counter() {
        return password_error_counter;
    }

    public void setPassword_error_counter(Integer password_error_counter) {
        this.password_error_counter = password_error_counter;
    }

    public Integer getMfa_error_counter() {
        return mfa_error_counter;
    }

    public void setMfa_error_counter(Integer mfa_error_counter) {
        this.mfa_error_counter = mfa_error_counter;
    }

    public Integer getQuarantine_expiry_ms() {
        return quarantine_expiry_ms;
    }

    public void setQuarantine_expiry_ms(Integer quarantine_expiry_ms) {
        this.quarantine_expiry_ms = quarantine_expiry_ms;
    }

    public Integer getProfile_created_ms() {
        return profile_created_ms;
    }

    public void setProfile_created_ms(Integer profile_created_ms) {
        this.profile_created_ms = profile_created_ms;
    }

    public Integer getProfile_updated_ms() {
        return profile_updated_ms;
    }

    public void setProfile_updated_ms(Integer profile_updated_ms) {
        this.profile_updated_ms = profile_updated_ms;
    }

    public Integer getLast_login_ms() {
        return last_login_ms;
    }

    public void setLast_login_ms(Integer last_login_ms) {
        this.last_login_ms = last_login_ms;
    }

    @Override
    public String toString() {
        return "User{" +
                "uuid='" + uuid + '\'' +
                ", pid='" + pid + '\'' +
                ", source='" + source + '\'' +
                ", user_state='" + user_state + '\'' +
                ", security_level='" + security_level + '\'' +
                ", mfa_method='" + mfa_method + '\'' +
                ", password='" + password + '\'' +
                ", password_error_counter=" + password_error_counter +
                ", mfa_error_counter=" + mfa_error_counter +
                ", quarantine_expiry_ms=" + quarantine_expiry_ms +
                ", profile_created_ms=" + profile_created_ms +
                ", profile_updated_ms=" + profile_updated_ms +
                ", last_login_ms=" + last_login_ms +
                '}';
    }
}
