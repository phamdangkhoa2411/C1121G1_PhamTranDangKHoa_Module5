import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaiVietService} from "../service/bai-viet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    danhMuc: new FormControl('',Validators.compose([Validators.required])),
    vungMien: new FormControl('',Validators.compose([Validators.required])),
    banLa: new FormControl('',Validators.compose([Validators.required])),
    banDangTin: new FormControl('',Validators.compose([Validators.required])),
    tinhTrang: new FormControl('',Validators.compose([Validators.required])),
    diaChi: new FormControl('',Validators.compose([Validators.required])),
    dienTich: new FormControl('',Validators.compose([Validators.required,Validators.min(20),Validators.pattern('^[1-9]\\d*$')])),
    huong: new FormControl('',Validators.compose([Validators.required])),
    tuaDe: new FormControl('',Validators.compose([Validators.required])),
    noiDung: new FormControl('',Validators.compose([Validators.required])),
    gia: new FormControl('',Validators.compose([Validators.required,Validators.min(1000000000),Validators.pattern('^[1-9]\\d*$')])),
    hinhAnh: new FormControl('',Validators.compose([Validators.required])),
  })

  constructor(private baiVietService: BaiVietService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // submit() {
  //   const baiViet = this.createForm.value;
  //   this.baiVietService.saveBaiviet(baiViet).subscribe(() => {
  //     this.createForm.reset();
  //     this.router.navigate(['list']);
  //     alert('Tạo thành công');
  //   }, e => {
  //     console.log(e);
  //   });
  // }
  get danhMuc(){
    return this.createForm.get('danhMuc')
  };
  get vungMien(){
    return this.createForm.get('vungMien')
  };
  get banLa(){
    return this.createForm.get('banLa')
  };
  get banDangTin(){
    return this.createForm.get('banDangTin')
  };
  get tinhTrang(){
    return this.createForm.get('tinhTrang')
  };
  get diaChi(){
    return this.createForm.get('diaChi')
  };
  get dienTich(){
    return this.createForm.get('dienTich')
  };
  get huong(){
    return this.createForm.get('huong')
  };
  get tuaDe(){
    return this.createForm.get('tuaDe')
  };
  get noiDung(){
    return this.createForm.get('noiDung')
  };
  get gia(){
    return this.createForm.get('gia')
  };
  get hinhAnh(){
    return this.createForm.get('hinhAnh')
  };


}
