import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Product } from '../domain/model/product.entity';
import { ProductResource } from './product-resource';

@Injectable({
  providedIn: 'root'
})
export class ProductAssembler {

  toEntity(resource: ProductResource): Product {
    return {
      id: Number(resource.idMeal),

      title:
        resource.strMeal,
    imageUrl: resource.strMealThumb,
    category:resource.strCategory || 'Recipe',
      detailUrl:
        `${environment.mealDbOfficialUrl}/${resource.idMeal}`};
  }
  toEntities(resources: ProductResource[]):
  Product[] {
    return resources.map(resource => this.toEntity(resource));
  }
}
