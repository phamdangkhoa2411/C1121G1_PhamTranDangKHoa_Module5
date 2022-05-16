package com.example.api.controller;

import com.example.api.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.api.service.ICategoriService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CategoryController {
    @Autowired
    private ICategoriService iCategoriService;

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> findAll() {
        List<Category> categoryList = iCategoriService.findAll();
        if (categoryList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }



}