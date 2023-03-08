import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrserviceService } from 'src/app/services/toastrservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginBtn:any;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrserviceService, private authService: AuthService) { }
  loginForm !: FormGroup


  baseurl = "https://localhost:7228/api/"
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["", [Validators.email, Validators.required ]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }
  get  Email() : FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get  Pwd() : FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

  // loginSubmited()
  // {
  //   this.http.get<any>(this.baseurl+"User").subscribe({next: (res)=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email && a.pwd === this.loginForm.value.pwd
  //     })
  //     if(user)
  //     {
  //       this.toastr.logged()
  // //   localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
  // //  this.loginForm.value.email == "shah@test.com" ? localStorage.setItem('userType', 'employee') : localStorage.setItem('userType', 'admin')

  //  this.loginForm.reset()
  //   this.router.navigate(['home']);
  //     }
  //   }})
  // }
isUserValid : boolean = false;

  loginSubmited()
    {
      debugger
    this.authService.loginUser([this.loginForm.value.email, this.loginForm.value.pwd]).subscribe({next: (res)=>{
        if( res == "Success")
        {
          this.isUserValid = true
          this.authService.setToken(res)
          this.loginForm.reset()
          this.toastr.logged();
          //alert("Logged")
          this.router.navigate(['material-component/dashboard']);

        }else
        {
          this.isUserValid = false;
          this.toastr.incorrect();
          //alert("login faieled")
        }
      }
    })
    }






}
