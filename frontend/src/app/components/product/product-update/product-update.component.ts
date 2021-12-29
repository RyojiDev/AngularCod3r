import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.readById(id).subscribe((result) => {this.product = result});
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(
      () => this.productService.showMessage('Produto atualizado com sucesso'));
    this.router.navigate(['/products']);
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }
}
