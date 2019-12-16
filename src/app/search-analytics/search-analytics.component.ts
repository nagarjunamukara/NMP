import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-analytics',
  templateUrl: './search-analytics.component.html',
  styleUrls: ['./search-analytics.component.scss']
})
export class SearchAnalyticsComponent implements OnInit {

  searchVal : string = "To see the summary information on all ports on the switch, enter the show interface status command with no arguments. Specify a particular module number to see information on the ports on that module only. Enter both the module number and the port number to see detailed information about the specified port.";
  analytics : string = "Search analytics is the use of search data to investigate particular interactions among Web searchers, the search engine, or the content during searching episodes. The resulting analysis and aggregation of search engine statistics can be used in search engine marketing (SEM) and search engine optimization (SEO).";


  constructor() { }

  ngOnInit() {
    
  }

}
