import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuramaComponent } from './furama/furama.component';
import { CustomerComponent } from './customer/customer.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { VillaComponent } from './service-create/villa/villa.component';
import { RoomComponent } from './service-create/room/room.component';
import { HouseComponent } from './service-create/house/house.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FuramaComponent,
    CustomerComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ContractComponent,
    CreateContractComponent,
    VillaComponent,
    RoomComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
