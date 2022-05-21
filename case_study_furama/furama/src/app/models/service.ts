import {RentType} from './RentType';
import {ServiceType} from './ServiceType';

export class Service {


  private _id?: number;
  private _name? : string;
  private _area? : number;
  private _cost? : number;
  private _maxPeople: number;
  private _standardRoom: string;
  private _description: string;
  private _poolArea: number;
  private _numberOfFloors: number;
  private _rentType: RentType;
  private _serviceType: ServiceType;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get area(): number {
    return this._area;
  }

  set area(value: number) {
    this._area = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get maxPeople(): number {
    return this._maxPeople;
  }

  set maxPeople(value: number) {
    this._maxPeople = value;
  }

  get standardRoom(): string {
    return this._standardRoom;
  }

  set standardRoom(value: string) {
    this._standardRoom = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get poolArea(): number {
    return this._poolArea;
  }

  set poolArea(value: number) {
    this._poolArea = value;
  }

  get numberOfFloors(): number {
    return this._numberOfFloors;
  }

  set numberOfFloors(value: number) {
    this._numberOfFloors = value;
  }

  get rentType(): RentType {
    return this._rentType;
  }

  set rentType(value: RentType) {
    this._rentType = value;
  }

  get serviceType(): ServiceType {
    return this._serviceType;
  }

  set serviceType(value: ServiceType) {
    this._serviceType = value;
  }
}

