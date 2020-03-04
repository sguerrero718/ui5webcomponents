import { Component, OnInit, NgModule } from '@angular/core';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; //(for ui5-table-column)
import "@ui5/webcomponents/dist/TableRow.js";    //(for ui5-table-row)
import "@ui5/webcomponents/dist/TableCell.js";   //(for ui5-table-cell)
import { Router } from '@angular/router';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css']
})
export class V2Component implements OnInit {
  private products: any[];
    
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.initTable();
  }

  private initTable() {
    this.products = [
    { product: "12345", supplier: "Supp 1", price: 452.22, weight: "99 lb", dim: "1x12x8"},
    { product: "56789", supplier: "Supp 2", price: 422.11, weight: "25 lb", dim: "1x3x6"},
    { product: "78933", supplier: "Supp 1", price: 322.80, weight: "38 lb", dim: "1x2x10"},
    { product: "32321", supplier: "Supp 3", price: 499.55, weight: "52 lb", dim: "2x4x6"}];

  }


  goToPage1() {
    this.router.navigate(['']);
  }

}
