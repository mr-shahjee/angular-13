import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  constructor( private authservice: AuthService) { }

  ngOnInit(): void {
  }

sendEmails()
{
  debugger
  this.authservice.sendEmail("Hello").subscribe((res)=>{
    alert(res);
  });
  alert("Success")
}
sendingEmails()
{
  debugger
  this.authservice.sendingEmail("Hello").subscribe((res)=>{
    alert(res);
  });
  alert("Sending EMail")
}

}
