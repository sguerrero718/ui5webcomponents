import { Component, OnInit } from '@angular/core';
import { MysvcService } from '../../services/mysvc.service';
import "@ui5/webcomponents/dist/TextArea";

@Component({
  selector: 'app-v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css']
})
export class V3Component implements OnInit {
  
  private data_from_service: any;

  constructor(
    private mySvc: MysvcService
  ) { }

  ngOnInit() {
  }

  // simple function calling service 
  goToPage1() {
    this.mySvc.goToPage1();
  }

  // better than simple
  callSampleService() { 
    // does not work from localhost
    // this.mySvc.getDataFromService()
    //   .subscribe( (data: any[]) => 
    //       this.data_from_service = data["d"]
    //   );

    this.mySvc.getDataFromService()
      .subscribe( 
        data => this.data_from_service = JSON.stringify(data["value"])
    );

    

    

  }

}
