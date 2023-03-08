import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewClientComponent } from 'src/app/material-component/new-client/new-client.component';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
  disable = true
  @ViewChild("icon") icon: ElementRef
data = ["a","s","d","f"];
message: any = [];
addItem(newItem: string)
{
  this.data.push(newItem);
}

  constructor(private shared: SharedService , private authService: AuthService, private router: Router, private dialog: MatDialog) {   }
  clickMe(){
      this.message = this.shared.getMessage();
  }
  
  ngOnInit(): void {
    
    this.message = this.shared.getMessage();

    this.clickMe()
  }
  openDialog()
  {
    if(!(this.router.url === '/login'))
    {
    this.disable = true

      if(this.disable == true)
      {
          this.dialog.open(NewClientComponent, {
            width: '30%'
          }).afterClosed().subscribe((val) => {
            if(val == 'save'){
              //this.getAllProducts();
            }
          });
      }
    }
    else
    {
      this.disable = false
    }
    
  }


  toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }


  logout()
  {
    
      this.authService.removeToken();
    this.router.navigate(['/login'])
    this.message = ""  
    //this.disable= !this.disable  
    //this.icon.nativeElement.style.display = "none"
    
    
  }

  // profile()
  // {
    
  //   this.router.navigate(['/material-component/profile']);    
    
  // }

}
