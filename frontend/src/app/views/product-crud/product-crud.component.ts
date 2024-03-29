import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private route: Router,
    private headerService: HeaderService)
    {
      headerService.headerData = {
        title: 'Cadastro de Produtos',
        icon: 'storefront',
        routeUrl: '/products'
      }
    }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.route.navigate(['/products/create'])
  }
}
