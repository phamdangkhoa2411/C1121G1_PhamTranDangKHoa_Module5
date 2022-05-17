package service.impl;

import model.Student;
import repository.StudentRepository;
import repository.impl.StudentRepositoryImpl;
import service.StudentService;

import java.util.List;

public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository = new StudentRepositoryImpl();
    @Override
    public List<Student> findAll() {
        List<Student> students = studentRepository.findAll();
        return students;
    }

    @Override
    public Student findById(Integer id) {
        Student student = this.studentRepository.findById(id);
        return student;
    }

    @Override
    public void updateStudent(Integer id, String name, String dateOfBirth) {
        if(name.equals("")) {
            System.out.println("Tên không được để trống");
            return;
        }
        if(dateOfBirth.equals("")){
            System.out.println("Ngày sinh không được để trống.");
            return;
        }
        if(this.studentRepository.findById(id) == null) {
            System.out.println("id không tồn tạo trong database");
            return;
        }
        this.studentRepository.updateStudent(id,name,dateOfBirth);
    }
}
