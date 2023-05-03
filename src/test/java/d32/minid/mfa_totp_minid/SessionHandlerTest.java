package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.idportenservices.totpauthentication.security.SessionHandler;
import jakarta.servlet.http.HttpSession;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpSession;

import static org.junit.jupiter.api.Assertions.*;

class SessionHandlerTest {
    HttpSession session;
    SessionHandler sessionHandler;

    @Test
    public void hasAttributeShouldFindAttribute() {
        session = new MockHttpSession();
        session.setAttribute("PID", "12345678901");
        sessionHandler = new SessionHandler(session);


        assertTrue(sessionHandler.hasAttribute(session));
    }

    @Test
    public void getSessionShouldReturnSession() {
        session = new MockHttpSession();
        session.setAttribute("PID", "12345678901");
        sessionHandler = new SessionHandler(session);

        assertNotNull(sessionHandler.getSession());
        assertEquals(session, sessionHandler.getSession());

    }

    @Test
    public void nullSessionShouldNotExist() {
        session = null;
        sessionHandler = new SessionHandler(session);

        boolean result = sessionHandler.exists(session);

        assertFalse(result);
    }
}