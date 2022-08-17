import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    let json = this.loginForm.getRawValue()
    if (this.loginForm.valid) {
      this.http.post('https://ecomsite.azurewebsites.net/route/login',json, {observe: 'response'}).subscribe((resp:any)=>{
          if(resp.status == 200){
            this.router.navigateByUrl('/home');
            localStorage.setItem('showchatbot','true')
          }
      })
    }
    console.log(this.loginForm.value);
  }
}
