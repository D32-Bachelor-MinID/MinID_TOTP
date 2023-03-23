package d32.minid.mfa_totp_minid.security;

import jakarta.servlet.http.HttpSession;

public class SessionHandler {
private final HttpSession session;
    public SessionHandler(HttpSession session) {
        this.session = session;
    }

    // Check if session exists
    public boolean exists(HttpSession session) {
        return session != null;
    }
    public boolean hasAttribute(HttpSession session) {
        return session.getAttribute("PID") != null;
    }
    public HttpSession getSession() {
        return session;
    }
}
