import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service'; // Import the service
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin(loginData: {email: string, password: string}) {
    return new Promise((resolve, reject) => {
        // this.authService.login(loginData).subscribe(data => {
        //     console.log(data)
        //     resolve(data)
        // });
        resolve({message:'okay'})
    })
}

  async onSubmit() {
    if (this.loginForm.valid) {
      const{username,password}=this.loginForm.value
      const loginReq = await this.submitLogin({email:username, password})
      console.log(loginReq)
      this.authService.setAuthentication({token:'zdfdfzfdf', role:'admin'})
      // this.http.post('http://localhost:5100/api/account/login', this.loginForm.value)
      //   .subscribe({
      //     next: (response: any) => {
      //       // Handle successful login, e.g., store token and navigate
      //       localStorage.setItem('token', response.token);
      //       this.router.navigate(['/homepage']);
      //     },
      //     error: (error) => {
      //       // Handle error
      //       this.errorMessage = 'Incorrect username or password.';
      //       this.loginForm.controls['password'].reset();
      //       this.loginForm.controls['password'].setErrors({ 'incorrect': true });
      //       this.loginForm.controls['password'].markAsTouched();
      //     }
      //   });
    }
  }
}