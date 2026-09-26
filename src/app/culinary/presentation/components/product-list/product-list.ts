import {
  Component,
  OnInit,
  inject
} from '@angular/core';

import { ProductCatalogueStore } from '../../../application/product-catalogue-store';

import { ProductCard } from '../product-card/product-card';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard, TranslatePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  private store = inject(ProductCatalogueStore);

  products = this.store.products;
  loading = this.store.loading;

  selectedCategory = 'nudibranchs';

  ngOnInit(): void {
    this.store.loadSeaFood();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'nudibranchs') {
      this.store.loadSeaFood();
    } else {
      this.store.loadVegetarian();
    }
  }
}
