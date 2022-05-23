package com.example.thi_modul_5_sping.service;

import com.example.thi_modul_5_sping.model.BaiViet;

import java.util.List;

public interface IBaiVietService {
   List<BaiViet> findAll();

   void save(BaiViet baiViet);

}
