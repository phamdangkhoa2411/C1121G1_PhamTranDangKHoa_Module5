package service.impl;

import model.Student;
import repository.IStudentRepository;
import repository.impl.StudentRepository;
import service.IStudentService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StudentService implements IStudentService {
    private IStudentRepository iStudentRepository = new StudentRepository();
    @Override
    public List<Student> findAll() {
        List<Student> studentList = iStudentRepository.findAll();
        return studentList;
    }

    @Override
    public Map<String, String> save(Student student) {
        Map<String, String> stringMap = new HashMap<>();
        if(student.getId()<1000) {
            stringMap.put("id","Id không đúng định dạng. Ví dụ: 1234");
        }
        if(!student.getName().matches("^[A-Za-z ]{5}$")) {

        }
        if(stringMap.isEmpty()) {
            iStudentRepository.save(student);
        }
        return stringMap;
    }
}
