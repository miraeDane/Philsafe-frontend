import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VictimRegisterComponent } from './victim-register/victim-register.component';
import { WitnessRegisterComponent } from './witness-register/witness-register.component';
import { ReportingPersonComponent } from './reporting-person/reporting-person.component';
import { SuspectDataComponent } from './suspect-data/suspect-data.component';
import { VictimDataComponent } from './victim-data/victim-data.component';
import { NarrativeOfIncidentComponent } from './narrative-of-incident/narrative-of-incident.component';
import { StationEditOfficersComponent } from './station-edit-officers/station-edit-officers.component';
import { AddNewOfficerComponent } from './add-new-officer/add-new-officer.component';
import { StationCrimeMapComponent } from './station-crime-map/station-crime-map.component';
import { StationDashboardComponent } from './station-dashboard/station-dashboard.component';
import { PoliceLoginComponent } from './police-login/police-login.component';
import { PoliceRegisterComponent } from './police-register/police-register.component';
import { PoliceEditProfileComponent } from './police-edit-profile/police-edit-profile.component';
import { PoliceJurisdictionComponent } from './police-jurisdiction/police-jurisdiction.component';
import { PolicePrivacyComponent } from './police-privacy/police-privacy.component';
import { PoliceDashboardComponent } from './police-dashboard/police-dashboard.component';
import { CrimeMapComponent } from './crime-map/crime-map.component';
import { MapboxService } from './mapbox.service';
import { PlotLongitudeAndLatitudeComponent } from './plot-longitude-and-latitude/plot-longitude-and-latitude.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VictimRegisterComponent,
    WitnessRegisterComponent,
    ReportingPersonComponent,
    SuspectDataComponent,
    VictimDataComponent,
    NarrativeOfIncidentComponent,
    StationEditOfficersComponent,
    AddNewOfficerComponent,
    StationCrimeMapComponent,
    StationDashboardComponent,
    PoliceLoginComponent,
    PoliceRegisterComponent,
    PoliceEditProfileComponent,
    PoliceJurisdictionComponent,
    PolicePrivacyComponent,
    PoliceDashboardComponent,
    CrimeMapComponent,
    PlotLongitudeAndLatitudeComponent,
    PaymentMethodComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Add this line
    HttpClientModule,// Add this line if you are making HTTP requests
  ],
  providers: [MapboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
