import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../model/product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  
  product: Product;
  id = this.route.snapshot.paramMap.get("id");


  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService
      .readById(this.id)
      .subscribe((result) => (this.product = result));
  }

  deleteProduct(): void {
    
    if(confirm(`Você realmente gostaria de deletar o item ${this.product.name} ?  `))
    {
      this.productService
        .delete(this.product.id)
        .subscribe(() =>
          this.productService.showMessage("Produto excluido com sucesso")
        );
      this.router.navigate(["/products"]);
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
