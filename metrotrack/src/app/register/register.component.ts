import { Component, OnInit } from '@angular/core';
import { userService } from '../services/userService';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: userService) {}
  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f.value)
    var user = {
      username: f.value.fullname,
      password: 'test password',
      email: f.value.email
    }
        this.userService.authenticateUser(f.form.value).subscribe(
      res => {

      })
    this.router.navigateByUrl('/home');
  }

}
