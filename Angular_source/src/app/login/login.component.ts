import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { TravelserviceService } from '../travelservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // loginform!: FormGroup;
  // constructor(private fb:FormBuilder, private serviceclass: TravelserviceService){

  // }

  // ngOnInit(): void{
  //   this.loginform=this.fb.group({
  //   email:[null,Validators.required],
  //   password:[null,Validators.required],
    
  // });

  // }

  // loguser(){
  //   this.serviceclass.adduser(this.loginform!.value).subscribe((res)=>{
  //     console.log(res);
  //   });
    
  // }
  // loginForm!: FormGroup;
  // errorMessage: string = '';


  email: string =" ";
  password: string =" ";
  errorMessage: string =" ";

 

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.loginForm = this.fb.group({
  //     email: [null, Validators.required],
  //     password: [null, Validators.required]
  //   });
  // }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe(
  //       (response) => {
  //       },
  //       (error) => {
  //         this.errorMessage = error.message; 
  //       }
  //     );
  //   }
  // }


  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful login
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
 
  
}
