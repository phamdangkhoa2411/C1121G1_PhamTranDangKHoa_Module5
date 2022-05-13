import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

tran : any ;

  constructor(
    private dictionaryService : DictionaryService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.tran = this.dictionaryService.findByWord(word);
    }) ;
  }


}
