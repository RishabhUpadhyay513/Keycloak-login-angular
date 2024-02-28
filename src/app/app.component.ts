import { Component } from '@angular/core';
import { AlertServiceService } from './services/alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-portfolio';

  constructor(private messageService: AlertServiceService) {}

}
