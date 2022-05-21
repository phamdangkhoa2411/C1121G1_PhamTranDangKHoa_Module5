import { Component, OnInit } from '@angular/core';
import { HomeServiceService} from '../services/home-service.service';
import {Home} from '../models/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    homeList : Home[] = [];
  constructor(private homeService : HomeServiceService) { }


  ngOnInit(): void {
    this.homeService.getAllHotel().subscribe(value => {
      this.homeList = value;
    })
  }

}
