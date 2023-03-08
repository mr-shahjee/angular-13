import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-schema',
  templateUrl: './show-schema.component.html',
  styleUrls: ['./show-schema.component.scss']
})
export class ShowSchemaComponent implements OnInit {
  public data :any = {};
  public schemaName :any = {};
  @ViewChild("formio") formio!: ElementRef;
  display = false;
  schema !: Schema
  schemaForm!: FormGroup
  selectedVal:any
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder) { }
  name!: any
  ngOnInit(): void {
    this.schemaForm = this.formBuilder.group(
      {
        schemaId: [''],
        schemaName: [''],
      })

      //debugger
      this.authService.getSchemaList().subscribe((res:any) => {
       this.name = res;
       this.name.reset();
      })
   
        // this.authService.getSchemaById(this.schemaForm.value.schemaId).subscribe((res:any)=> {
        //   this.name = res
        // })
    
        // this.authService.getSchema().subscribe((res:any)=> {
        //   this.name = res
        // })
    

// debugger
//       this.authService.getSchemaById([this.schemaForm.value.schemaName], this.schemaForm.value.schemaId ).subscribe((res:any)=>{
//         this.schemaName = res[0]['schemaName'];
//       })
 
  }


  
getDropDownList(e:Schema)
{
  debugger
 this.authService.getSchemaById(e).subscribe((res:any) => {
  this.name = res
  console.log("Changed")
  console.log(this.name)
  console.log(e)
  this.selectedVal = this.name[0].jsonSchema;
  this.selectedVal = JSON.parse(this.selectedVal);
  //console.log()
 })




}


  getSchemaData()
{
  //debugger
  this.authService.getSchema().subscribe({
    next: (res:any)=>{
     // debugger
      this.display = true
      // this.schemaName = res[0]['schemaName'];
      this.data = res[0]["jsonSchema"]
      this.data = JSON.parse(this.data);
      console.log(this.data)
      alert("Successfully")
    },
    error: ()=>{
      alert("error")
    }
  })
}



}
class Schema {
  schemaId!: number;
  jsonSchema : string = "";
  schemaName: string = "";
}
