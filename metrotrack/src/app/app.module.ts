import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { NgModule} from '@angular/core';
import { NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import {RegisterComponent } from './register/register.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './home/navbar/navbar.component';
import { userService } from './services/userService';
import { metrocardService } from './services/metrocardService';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

 ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgForm
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
