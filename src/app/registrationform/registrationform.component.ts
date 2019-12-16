import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {
  constructor() { }

  registrationform:boolean = false;
  searchAnalytics:boolean = true;
  registrationformTable:boolean = false;


  
  ngOnInit() {
  }

}
