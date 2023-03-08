import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrserviceService } from 'src/app/services/toastrservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrserviceService,
    private router: Router) { }
  displayMsg = "" 
  IsAccountCreated = false;
  radioBtn = ['Male', 'Female']

  ngOnInit(): void {
  }
  regForm = new FormGroup({
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    mobile: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    pwd: new FormControl("", Validators.required),
  })

  registerSubmited()
  {
      this.authService.registerUser([
        this.regForm.value.firstname,
        this.regForm.value.lastname,
        this.regForm.value.email,
        this.regForm.value.mobile,
        this.regForm.value.gender,
        this.regForm.value.pwd,
      ]).subscribe(res => {
        if(this.regForm.valid){
          //this.displayMsg = "account created successfully";
          this.toastrService.showSuccess();
          this.regForm.reset();
          this.router.navigate(['login'])
          this.IsAccountCreated = true
        }
        else
        {alert("please fill the form")
          this.displayMsg = "Something went wrong"
          this.IsAccountCreated = false
        }
      })
    
    
  }
  get FirstName() : FormControl {
    return this.regForm.get('firstname') as FormControl;
  }

  get LastName() : FormControl {
    return this.regForm.get('lastname') as FormControl;
  }
  get Email() : FormControl {
    return this.regForm.get('email') as FormControl;
  }
  get Mobile() : FormControl {
    return this.regForm.get('mobile') as FormControl;
  }
  get Gender() : FormControl {
    return this.regForm.get('gender') as FormControl;
  }
  get Pwd() : FormControl {
    return this.regForm.get('pwd') as FormControl;
  }
}
