import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrserviceService } from 'src/app/services/toastrservice.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  updateBtn: string = "save"
  clientForm!: FormGroup
  subscription!: Subscription;

  
  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
  private dialogref: MatDialogRef<NewClientComponent>, private dialog: MatDialog,
    private toastr: ToastrserviceService,
    private authService: AuthService) { 

     
    }



    
radioBtn = ['Brand New', 'Second Hand', 'Refurbished']

ngOnInit(): void {
 

  

this.clientForm = this.formBuilder.group(
  {
    productName: ['',Validators.required ],
    category: ['', Validators.required],
      date: ['', Validators.required],
      condition: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required]
  });

  if(this.editData) {
    this.updateBtn = 'Update'
    this.clientForm.controls['productName'].setValue(this.editData.productName);
    this.clientForm.controls['category'].setValue(this.editData.category);
    this.clientForm.controls['comment'].setValue(this.editData.comment);
    this.clientForm.controls['price'].setValue(this.editData.price);
    this.clientForm.controls['condition'].setValue(this.editData.condition);
    this.clientForm.controls['date'].setValue(this.editData.date);

  }
}


addProduct(){
  // console.log(this.productForm.value)
 
  if(!this.editData)
  {
   if(this.clientForm.valid)
   {
    this.authService.postClients([this.clientForm.value.productName,
      this.clientForm.value.category,
      this.clientForm.value.comment,
      this.clientForm.value.price,
      this.clientForm.value.condition,
      this.clientForm.value.date    ])
    .subscribe({
      next: (res)=>{
       //this.openAlert()
       //this.showSuccess();
        this.toastr.showSuccess()
        this.clientForm.reset();
        this.dialogref.close('save'); },
      error: ()=>{
        this.toastr.showError();
      }
      
    })
  }else
  {
    alert("Fill all the mandatory fields")
  }
}
 else
 {
   this.updateProducts();
 }
}


updateProducts()
{
 // debugger
  this.authService.putClients([this.clientForm.value.productName,
  this.clientForm.value.condition, this.clientForm.value.comment,
  this.clientForm.value.price,
  this.clientForm.value.condition,
  this.clientForm.value.date   
] , this.editData.productId)
  .subscribe({next: (res)=>{
    this.toastr.showUpdate()
    this.clientForm.reset();
    this.dialogref.close('update')
  },
error:()=>{
this.toastr.showError()  }})
}

}
