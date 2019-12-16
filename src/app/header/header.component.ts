import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myIndex = 0;
  constructor(private router:Router){}
  
  registrationform:boolean = false;
  searchAnalytics:boolean = true;
  registrationformTable:boolean = false;
  
  searchVal : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  analytics : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  carousel() {
      let i: number;
      let x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
          (x[i] as HTMLElement).style.display = "none";  
      }
      if(this.myIndex !== NaN) {
        this.myIndex++;
      }
      
      if (this.myIndex > x.length) {
        this.myIndex = 1
      }    
      if(x[this.myIndex-1] !== undefined) {
        (x[this.myIndex-1] as HTMLElement).style.display = "block" ;
      }   
      setTimeout(() => {
        this.carousel();
      }, 2000); // Change image every 2 seconds
    
  };

  ngOnInit() {
    this.carousel();
  }

}
