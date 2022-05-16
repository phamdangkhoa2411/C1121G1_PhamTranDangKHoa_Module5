package com.example.api.service;

import com.example.api.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.api.reposirory.ICategoryRepository;

import java.util.List;

@Service
public class CategoryService implements ICategoriService {
    @Autowired
    ICategoryRepository iCategoryRepository;

    @Override
    public List<Category> findAll() {
        return iCategoryRepository.findAll();
    }

    @Override
    public Category findById(Integer id) {
        return iCategoryRepository.findById(id).orElse(null);
    }

    @Override
    public void remove(Integer id) {
        iCategoryRepository.deleteById(id);
    }
}
