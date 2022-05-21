import {Component, Inject, OnInit} from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {Service} from '../../models/service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit {
    service = new Service();
    id: number;
  constructor(private serviceService: ServiceService,
              private activatedRoute : ActivatedRoute ,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<DeleteServiceComponent>,
              private  toast : ToastrService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.serviceService.findById(this.data).subscribe(value => {
      this.service = value;
    })

  }

  onNoClick(): void {
    this.dialog.close();
  }

  deleteService() {
        this.serviceService.deleteService(this.service).subscribe(()=>{
          this.dialog.close();
          this.toast.error( this.service.name, "Đã Xóa Thành Công" ,
            {
              timeOut : 1000 ,
              progressBar : true
            })
        });
  }
}
