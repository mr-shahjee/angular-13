import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrserviceService } from 'src/app/services/toastrservice.service';


@Component({
  
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent  {

//public builder: Object = { "components": [] };
  @ViewChild("json") jsonElement!: ElementRef;
  @ViewChild("formio") formio!: any;
  public form : Object = { components: [] };
  public data :Object = { };
  //@ViewChild("json") formBuilder!: FormBuilderComponent;
  rendered = true;
  public schema!: Schema;
  obj:Schema = new Schema();
  schemaForm!: FormGroup
  




// ngAfterViewInit()
// {
//   //debugger
//   this.formBuilder.ready.then((formio)=> {
//     console.log(formio)
//     this.form = formio
    
//   });
 
// }


  constructor(private authService: AuthService,
    
    private formBuilder: FormBuilder) { }

  onChange() {
    //debugger
      //console.log({form: this.form});
      
      this.jsonElement.nativeElement.innerHTML = '';
      this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.form, null, 4)));
       this.data = JSON.parse(JSON.stringify(this.form, null, 4));
       //console.log("Dummy")
       
      
      }
 
   
  ngOnInit(): void {
    this.schemaForm = this.formBuilder.group(
      {
        schemaName: [''],
      })
 
     }
  

     
     addSchema(){
      
     debugger
     this.obj.jsonSchema = this.jsonElement.nativeElement.textContent;
        this.authService.postSchema([this.schemaForm.value.schemaName ,this.obj.jsonSchema])
        .subscribe({
          next: ()=>{
            alert("Success");
         
            
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

