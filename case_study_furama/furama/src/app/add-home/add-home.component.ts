import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeServiceService} from '../services/home-service.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {
  selectedImage: any = null;

  formHome: FormGroup = new FormGroup({
    name : new FormControl(""),
    img: new FormControl(""),
    price: new FormControl("")
  })
  constructor( @Inject(AngularFireStorage) private storage: AngularFireStorage,
               private homeServiceService: HomeServiceService,
               private router : Router) { }

  ngOnInit(): void {
  }
  showPreview(event: any) {
    this.selectedImage = event.taget.files[0];
    console.log(this.selectedImage);
  }

  addHome() {
    const nowDate = Date.now();
    // upload image to firebase
    // const nameImg = this.getCurrentDateTime();
    const nameImg = nowDate + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    console.log(fileRef);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      // finalize(() => {
      //   fileRef.getDownloadURL().subscribe((url) => {
      //
      //     this.formHome.patchValue({img: url});
      //
      //     // Call API to create vaccine
      //     // this.vaccineService.createVaccineDTO(this.formCreateVaccine.value).subscribe(() => {
      //     //   this.router.navigateByUrl('vaccine-list');
      //     // })
      //   });
      // })
    ).subscribe();
  }


}
