package democamp.helloworld;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorldServlet extends HttpServlet {

    private static final long serialVersionUID = -5974238279406660133L;

    @Override
    protected void doGet(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException,
            IOException {
        resp.getWriter().println("Hello world");

    }

}
