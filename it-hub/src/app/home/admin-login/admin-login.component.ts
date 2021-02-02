import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { JwtService } from '../core/services/jwt.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  hide = true;
  loginForm : FormGroup;
  

  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private jwtservice: JwtService,
    private router: Router,
    private snackBar: MatSnackBar
    ){  }

  ngOnInit() : void{
    this.initForm();
  }

  private initForm(){
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClick(){
    this.authService.login(this.loginForm.value).subscribe((data) => {
      this.jwtservice.setToken(data.token);
      this.router.navigate(['/admin']);
    },
    err => this.errorHandler(err, "Ooops something went Wrong!"));
  }

  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
  }
}