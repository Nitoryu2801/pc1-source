import { Injectable, inject, signal } from '@angular/core';

import { ProductsApi } from '../infrastructure/products-api';
import { ProductAssembler } from '../infrastructure/product-assembler';
import { Product } from '../domain/model/product.entity';
import {ProductDetailResource} from '../infrastructure/product-resource';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogueStore {

  private productsApi = inject(ProductsApi);
  private productAssembler = inject(ProductAssembler);

  products = signal<Product[]>([]);
  loading = signal(false);

  selectedRecipe=signal<ProductDetailResource | null>(null);
  detailLoading = signal(false);
  loadSeaFood():void {
    this.loading.set(true);
    this.productsApi.getSeaFood().subscribe({
      next: response => {
        this.products.set(
          this.productAssembler.toEntities(response.meals)
        );

        this.loading.set(false);
      },

      error: () => {
        this.products.set([]);
        this.loading.set(false);
      }
    });
  }

    loadVegetarian():void {
      this.loading.set(true);
      this.productsApi.getVegetarian().subscribe({
        next: response => {
          this.products.set(
            this.productAssembler.toEntities(response.meals)
          );

          this.loading.set(false);
        },

        error: () => {
          this.products.set([]);
          this.loading.set(false);
        }
      })
    }

}
