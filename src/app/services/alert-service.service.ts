import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService  {

  constructor(private notifierService:NotifierService) { }

}
