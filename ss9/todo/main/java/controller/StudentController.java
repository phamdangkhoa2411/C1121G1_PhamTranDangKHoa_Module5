package controller;

import model.Student;
import service.IStudentService;
import service.impl.StudentService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@WebServlet(name = "StudentController", urlPatterns = {"/students", "/"})
public class StudentController extends HttpServlet {
    //Cơ chế Dependence Injection
    private IStudentService iStudentService = new StudentService();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "create":
                Integer id = Integer.parseInt(request.getParameter("id"));
                String name = request.getParameter("name");
                String dateOfBirth = request.getParameter("dateOfBirth");
                Integer gender = Integer.valueOf(request.getParameter("gender"));
                Double grade = Double.valueOf(request.getParameter("grade"));
                Student student = new Student(id, name, dateOfBirth, gender, grade);
                Map<String, String> stringMap = iStudentService.save(student);
                if(stringMap.isEmpty()) {
                    response.sendRedirect("/students");
                } else {
                    request.setAttribute("errors",stringMap);
                    request.getRequestDispatcher("create.jsp").forward(request,response);
                }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if (action == null) {
            action = "";
        }
        switch (action) {
            case "create":
                request.getRequestDispatcher("create.jsp").forward(request, response);
                break;
            default:
                List<Student> studentList = iStudentService.findAll();
                request.setAttribute("students", studentList);
                request.getRequestDispatcher("list.jsp").forward(request, response);
        }

    }
}
