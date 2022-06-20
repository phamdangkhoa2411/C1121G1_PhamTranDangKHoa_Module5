export class Service {
  serviceId: number;
  serviceCode: string;
  serviceName: string;
  serviceArea: number;
  serviceCost: number;
  serviceMaxPeople: number;
  roomStandard?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  rentType: string;
  serviceType: string;


  constructor(serviceId: number, serviceCode: string, serviceName: string, serviceArea: number, serviceCost: number, serviceMaxPeople: number, roomStandard: string, descriptionOtherConvenience: string, poolArea: number, numberOfFloors: number, rentType: string, serviceType: string) {
    this.serviceId = serviceId;
    this.serviceCode = serviceCode;
    this.serviceName = serviceName;
    this.serviceArea = serviceArea;
    this.serviceCost = serviceCost;
    this.serviceMaxPeople = serviceMaxPeople;
    this.roomStandard = roomStandard;
    this.descriptionOtherConvenience = descriptionOtherConvenience;
    this.poolArea = poolArea;
    this.numberOfFloors = numberOfFloors;
    this.rentType = rentType;
    this.serviceType = serviceType;
  }
}
