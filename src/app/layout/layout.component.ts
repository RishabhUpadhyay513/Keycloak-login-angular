import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServiceService } from '../services/alert-service.service';
import { NotifierService } from 'angular-notifier';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private notifierServ: NotifierService) {}

  ngOnInit(): void {
    
  }

  logout() {
    this.router.navigate(['/login']);
    
  }
  
  show() {
    console.log('object');
    this.notifierServ.notify('success','Logout Successfully')
  }

}
