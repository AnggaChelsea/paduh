import { Component, OnInit} from '@angular/core'
import { AuthService } from '../auth.service'
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from  '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
    userForm:any = FormGroup;
    loginForm:any = FormGroup ;
    isSubmitted  =  false;
    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder){}

    ngOnInit() {
        this.loginForm  =  this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        }
        get formControls() { 
            return this.loginForm.controls; 
        }
       
        login(){
            console.log(this.loginForm.value);
            this.isSubmitted = true;
            if(this.loginForm.invalid){
              return;
            }
            this.authService.login(this.loginForm.value);
            this.router.navigateByUrl('/qrcode');
          }


}