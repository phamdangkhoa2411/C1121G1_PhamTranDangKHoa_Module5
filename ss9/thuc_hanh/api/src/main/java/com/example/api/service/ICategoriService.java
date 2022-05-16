package com.example.api.service;

import com.example.api.model.Category;

import java.util.List;

public interface ICategoriService {
    List<Category> findAll();

    Category findById(Integer id);



    void remove(Integer id);
}
