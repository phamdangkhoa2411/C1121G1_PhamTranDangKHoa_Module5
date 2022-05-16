package com.example.api.reposirory;

import com.example.api.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ICategoryRepository extends JpaRepository<Category, Integer> {

}
