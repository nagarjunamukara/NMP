import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-srp',
  templateUrl: './srp.component.html',
  styleUrls: ['./srp.component.scss']
})
export class SrpComponent implements OnInit {

  
  constructor(){}
  
  searchAnalytics:boolean = true;
  quicktask:boolean = true;
  thisweek:boolean = true;
  
  //searchVal : string = "To see the summary information on all ports on the switch, enter the show interface status command with no arguments. Specify a particular module number to see information on the ports on that module only. Enter both the module number and the port number to see detailed information about the specified port.";
  //analytics : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  
  ngOnInit() {
  }

}

