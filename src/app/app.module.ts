import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/controllers/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { ToastService } from 'src/app/services/toast/toast-service';
import { MaterialUIModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialUIModule,
  ],
  providers: [AuthService,ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
