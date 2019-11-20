import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PayeeAddComponent } from './payee-add/payee-add.component';
import { PayeeGetComponent } from './payee-get/payee-get.component';
import { PayeeEditComponent } from './payee-edit/payee-edit.component';
import { PayeesService } from './payees.service';  
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  { path: 'payee-add', component: PayeeAddComponent },
  { path: 'payee-get', component: PayeeGetComponent },
  { path: 'payee-edit', component: PayeeEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PayeeAddComponent,
    PayeeGetComponent,
    PayeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [PayeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
