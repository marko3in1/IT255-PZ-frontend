import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.email = new FormControl();
    this.password = new FormControl();
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    this.authService.login(this.email.value, this.password.value).subscribe(result => {
      if (result) {
        this.router.navigate(['/employees']);
      } else {
        alert('Invalid credentials, please try again');
      }
    }, error => {
      alert('Something went wrong');
    });
  }
}