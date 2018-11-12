import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import {RegisterComponent } from './register/register.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

 ]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
