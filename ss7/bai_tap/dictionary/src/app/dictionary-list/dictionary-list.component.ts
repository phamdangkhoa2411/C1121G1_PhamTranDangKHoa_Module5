import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
;
  dictionaryList: Dictionary[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.dictionaryList = this.dictionaryService.dictionaryList;
  }



}
