package com.example.thi_modul_5_sping.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
@Setter
@Getter
@Entity
@Table(name = "bai_viet")
public class BaiViet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    public BaiViet() {
    }
}
