package com.example.thi_modul_5_sping.controller;


import com.example.thi_modul_5_sping.dto.BaiVietDTO;
import com.example.thi_modul_5_sping.model.BaiViet;
import com.example.thi_modul_5_sping.service.IBaiVietService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/baiViet")
@CrossOrigin
public class BaiVietController {
    @Autowired
    private IBaiVietService iBaiVietService;

    @GetMapping("")
    public ResponseEntity<Iterable<BaiViet>> findAllBaiViet(){
        List<BaiViet>baiViets = (List<BaiViet>) iBaiVietService.findAll();
        if (baiViets.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(baiViets, HttpStatus.OK);
    }
    @PostMapping(value = "/save")
    public ResponseEntity<Map<String, String>> saveCustomer(@Valid @RequestBody BaiVietDTO baiVietDTO,
                                                            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.OK);
        }
        BaiViet baiViet = new BaiViet();
        BeanUtils.copyProperties(baiVietDTO, baiViet);
        iBaiVietService.save(baiViet);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
