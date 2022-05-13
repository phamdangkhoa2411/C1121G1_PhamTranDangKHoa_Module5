import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaryList: Dictionary[] = [
    {
      word: 'computer',
      mean: 'máy tính để bàn'
    },
    {
      word : 'laptop',
      mean : 'máy tính xách tay'
    },
    {
      word : 'phone',
      mean : 'điên thoại'
    },
    {
      word: 'watch',
      mean : 'đồng hồ'
    },
    {
      word : 'car',
      mean : 'xe ôtô'
    },
    {
      word:'televisions',
      mean: 'ti vi'
    },
    {
      word : 'moto',
      mean: 'xe máy '
    }
  ]

  constructor() {
  }
  findByWord(word : string){
    return this.dictionaryList.find(key => key.word === word);
  }
}
