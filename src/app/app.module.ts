import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClassDetailsComponent,
    TeacherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
