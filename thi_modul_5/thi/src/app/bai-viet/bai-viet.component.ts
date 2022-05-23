import {Component, OnInit} from '@angular/core';
import {BaiVietService} from "../service/bai-viet.service";
import {BaiViet} from "../model/bai-viet";

@Component({
  selector: 'app-bai-viet',
  templateUrl: './bai-viet.component.html',
  styleUrls: ['./bai-viet.component.css']
})
export class BaiVietComponent implements OnInit {
  baiViets: BaiViet[] = [];

  constructor(private baiVietService: BaiVietService) {
  }

  getBaiviet() {
    this.baiVietService.getBaiviet().subscribe(next => {
      this.baiViets = next;
      console.log(this.baiViets)
    })


  }

  ngOnInit(): void {
    this.getBaiviet();

  }

  // search(dienTich: string, huong: string, gia: string) {
  //   this.baiVietService.findByKey(dienTich, huong, gia).subscribe(next => {
  //     this.baiViets = next;
  //     console.log(next)
  //   });
  //
  // }

}
