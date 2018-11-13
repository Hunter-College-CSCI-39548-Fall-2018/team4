import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { userService } from '../services/userService'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: userService) {}
  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.form.value);

        this.userService.authenticateUser(f.form.value).subscribe(
      res => {

      })
    this.router.navigateByUrl('/home');
  }
}
