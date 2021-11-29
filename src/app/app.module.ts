import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
// import { FlexLayoutModule } from '@angular/flex';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
//for register
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatTabsModule
} from '@angular/material/tabs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { AceComponent } from './creditcard/ace/ace.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './network.interceptor';

// import { ConfirmEqualValidator } from "./confirm-equal-validator";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    ApplyFormComponent,
    AceComponent,
    // ConfirmEqualValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatExpansionModule,
    CdkAccordionModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule
    // FlexLayoutModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
