import { Product } from './../model/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  atributoLegal = "qualquer";

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  fazerAlgo(): void {
    console.log('Fazendo algo!')
    for (let i = 0; i < 4; i++)
    {
      console.log(this.atributoLegal+ " " + i)
    }
  }

  cancelar(): void {
      this.router.navigate(['/products'])
  }
}
