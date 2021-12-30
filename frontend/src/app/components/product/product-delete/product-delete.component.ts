import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product
  const id = this.route.snapshot.paramMap.get('id');
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  

    this.productService.readById(this.id).subscribe((result) => this.product = result);
  }
  
  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(
      () => this.productService.showMessage('Produto atualizado com sucesso'));
    this.router.navigate(['/products']);
  }
}