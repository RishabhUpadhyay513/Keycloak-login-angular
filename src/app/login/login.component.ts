import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from '../services/alert-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private fb: FormBuilder, private router: Router, private notifierService: AlertServiceService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    })
  }

  loginUser(event:any) {
    console.log(this.loginForm.value);
    this.router.navigate(['/products']);
    // this.notifierService.showNotification('success','Login Successfully')
  }
}
