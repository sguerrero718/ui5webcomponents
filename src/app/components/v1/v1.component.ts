import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Title";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.css']
})
export class V1Component implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {     
  }

  ngOnInit() {
  }

  sayHello() {
    //alert('Hello from UI5 web components ');
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onNavToPage2() {
    this.router.navigate(['v2']);
  }

}
