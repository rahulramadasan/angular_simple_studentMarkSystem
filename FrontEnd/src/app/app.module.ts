import { StudentServiceService } from './student-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { ProgresscardComponent } from './progresscard/progresscard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddStudentComponent,
    RemoveStudentComponent,
    ProgresscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
