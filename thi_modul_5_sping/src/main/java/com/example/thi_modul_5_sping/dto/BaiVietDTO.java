package com.example.thi_modul_5_sping.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BaiVietDTO {

    private Integer id;
    private String danhMuc;
    private String vungMien;
    private String banLa;
    private String banDangTin;
    private String tinhTrang;
    private String diaChi;
    private Integer dienTich;
    private String huong;
    private String tuaDe;
    private String noiDung;
    private Integer gia;
    private String hinhAnh;

    public BaiVietDTO() {
    }
}
