package com.example.thi_modul_5_sping.service;

import com.example.thi_modul_5_sping.model.BaiViet;
import com.example.thi_modul_5_sping.repository.IBaiVietRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BaiVietService implements IBaiVietService{

@Autowired
    IBaiVietRepository iBaiVietRepository;
    @Override
    public List<BaiViet> findAll() {
        return iBaiVietRepository.findAll();
    }

    @Override
    public void save(BaiViet baiViet) {
        iBaiVietRepository.save(baiViet);

    }
}
