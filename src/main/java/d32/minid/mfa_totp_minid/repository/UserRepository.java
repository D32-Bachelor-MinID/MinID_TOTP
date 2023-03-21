package d32.minid.mfa_totp_minid.repository;

import d32.minid.mfa_totp_minid.user.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    User findByUuid(String uuid);
}
