import { Component,OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { TravelserviceService } from '../travelservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
// import { Validator } from '@angular/forms';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // constructor(private router: Router) { }


  // navigateTologin(): void {
  //   this.router.navigateByUrl('/login'); 
  // }


  clickbutton(){
    alert("HELLO ...\nWELCOME!");
  }


  registerform!: FormGroup;
  constructor(private fb:FormBuilder, private serviceclass: TravelserviceService){

  }

  ngOnInit(): void{
    this.registerform=this.fb.group({
    email:[null,Validators.required],
    password:[null,Validators.required],
    name:[null,Validators.required],
    contact:[null,Validators.required],

  });

  }

  // onSubmit(): void {
  //   this.serviceclass.adduser(this.registerform.value)
  //     .subscribe(response => {
  //       console.log(response);
  //     }, error => {
  //       console.error(error);
  //     });
  // }

  adduser(){
    this.serviceclass.adduser(this.registerform!.value).subscribe((res)=>{
      console.log(res);
    });
    
  }

 
}
