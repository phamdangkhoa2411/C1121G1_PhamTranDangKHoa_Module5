import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {HomeComponent} from './home/home.component';
import {CustomerModule} from './customer/customer.module';
import {EmployeeModule} from './employee/employee.module';
import {ContractModule} from './contract/contract.module';
import {ServiceModule} from './service/service.module';
import {HttpClientModule} from '@angular/common/http';
import { AddHomeComponent } from './add-home/add-home.component';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    AddHomeComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    EmployeeModule,
    ContractModule,
    ServiceModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
