import { ProductService } from './../product.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../model/product.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price'];
  @ViewChild(MatTable) table: MatTable<Product>;


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.read().subscribe( products => { 
      this.products = products
     })
  }

  teste(product: Product[]): void {
    alert(product.map(x => x.name));
  }
}
