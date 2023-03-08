import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-gad7',
  templateUrl: './gad7.component.html',
  styleUrls: ['./gad7.component.scss']
})
export class Gad7Component implements OnInit {
  newItem:any;
  messages: any
  @Input() itemEvent = new EventEmitter<string>();

  
  store:any
  date1: any
  treatment: any
  dblClickEvent(grid:any, event:any) {
     debugger;
     this.store = (event.path[1].innerText)
     const parts = this.store .split(",").map((text: string, index: number) => {
      return {
        position: index+1,
        message: text.trim()
      }
    });
    this.messages = parts[0].message.split("\t")[2]
     //alert(this.message)
     
    //  this.date1 = event.path[1].innerText.slice(1, 20);
    //  this.treatment = event.path[1].innerText.slice(20, -2)
    //  alert(this.date1 + " "+ this.treatment)
 // alert('the selected row is ' + event.path[1].textContent);
  //use the following line if you want to get the clicked cell content:
  // console.log('clicked cell content'+ event.path[0].textContent);
  // console.log('clicked cell content'+ event.path.textContent);
   alert(this.messages)
  this.shared.setMessage(this.messages)

}


  isShow: boolean;
  topPosToStartShowing = 50;
  gad7Form!: FormGroup

  item1: number;
  cal: any = 0;
  intput1: any = 0
  intput2: number = 0
  intput3: number = 0
  intput4: number = 0
  intput5: number = 0
  intput6: number = 0
  intput7: number = 0

  items: any[] = [
    { value: 0, viewValue: 'Not at all' },
    { value: 1, viewValue: 'Several Days' },
    { value: 2, viewValue: 'More than half the Day' },
    { value: 3, viewValue: 'Nealry Every Day' }
  ];


  onChange1(e1: any) {
    this.intput1 = e1
    this.onAdd()

  }

  onChange2(e2: any) {
    this.intput2 = e2
    this.onAdd()
  }

  onChange3(e3: any) {
    this.intput3 = e3
    this.onAdd()

  }
  onChange4(e4: any) {
    this.intput4 = e4
    this.onAdd()

  }
  onChange5(e5: any) {
    this.intput5 = e5
    this.onAdd()

  }
  onChange6(e6: any) {
    this.intput6 = e6
    this.onAdd()

  }
  onChange7(e7: any) {
    this.intput7 = e7
    this.onAdd()

  }


  onAdd() {
    this.cal = this.intput1 + this.intput2 + this.intput3 + this.intput4 + this.intput5 + this.intput6 + this.intput7
  }


  constructor(
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document, private authService: AuthService, private shared: SharedService) { }
  gad7Forms = new FormGroup({

    gad7Date: new FormControl('', [Validators.required]),
    treatmentStage: new FormControl('', [Validators.required]),
    totalscr: new FormControl(1)
  });


  gridData: []
  ngOnInit(): void {


    this.authService.getGad7().subscribe({
      next: (res: any) => {
        this.gridData = res;
        console.log(this.gridData)
      },
      error: () => {
        alert("error")
      }
    })
  }


addNewItem(value : string)
{
  this.itemEvent.emit(this.newItem);
}




  onSubmit(): void {

    if (this.gad7Forms.valid) {
      var totalscr = this.cal;
      this.authService.postGad7([this.gad7Forms.value.gad7Date,
      this.gad7Forms.value.treatmentStage,
        totalscr
      ])
        .subscribe({
          next: (res) => {
            alert("Success")
          },
          error: () => {
            window.location.reload();
          }

        })

    }
    // alert("Hello")

  }



  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  checkValidate() {
    if (!this.gad7Forms.valid) {
      this.gotoTop();
    }
  }



}
