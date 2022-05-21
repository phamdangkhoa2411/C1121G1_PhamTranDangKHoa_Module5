import {Education} from './Education';
import {Division} from './Division';

export class Employee {
  id?: number;
  name?: string;
  birthDay?: string;
  idCard?: number;
  salary?: number;
  phone?: number;
  email?: string;
  address?: string;
  division? :Division;
  education? : Education;
  position? : Position;


  constructor() {
  }
}
