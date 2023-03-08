import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';



@Injectable({
  providedIn: 'root'
})
export class ToastrserviceService {

  constructor(private toast: NgToastService) { }
  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Data is added successfully',duration:2000});
  }
  showUpdate()
  {
    this.toast.success({detail:"SUCCESS",summary:'Product is Updated successfully',duration:2000});

  }
  showDelete()
  {
    this.toast.success({detail:"SUCCESS",summary:'Deleted successfully',duration:2000});

  }
  showError() {
    this.toast.error({detail:"ERROR",summary:'Something went wrong',sticky:true});
  }
  
  showInfo() {
    this.toast.info({detail:"ADDED",summary:'Thank You',sticky:true});
  }
  notLogged()
  {
    this.toast.warning({detail:"WARN",summary:'You are not logged in',duration:3000});

  }
  logged()
  {
    this.toast.success({detail:"SUCCESS",summary:'Logged in Successfully!',duration:3000});

  }
  showWarn() {
    this.toast.warning({detail:"WARN",summary:'Error While fetching the records',duration:5000});
  }
  incorrect()
  {
    this.toast.error({detail:"ERROR",summary:'Incorrect Username or Password',sticky:true});

  }
}
