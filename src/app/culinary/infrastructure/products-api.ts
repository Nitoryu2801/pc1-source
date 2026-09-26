import {Injectable,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ProductResource,ProductDetailResource} from './product-resource'

interface ProductResponse {
  meals:ProductResource[];
}
interface ProductDetailResponse {
  meals:ProductDetailResource[];
}

@Injectable({providedIn: 'root'})
export class ProductsApi {
  private http = inject(HttpClient);

  getSeaFood():Observable<ProductResponse>{
    return this.http.get<ProductResponse>(environment.mealDbSeaFoodUrl);
  }

  getVegetarian():Observable<ProductResponse>{
    return this.http.get<ProductResponse>(environment.mealDbVegetarianUrl);
  }

  getRecipeDetails(id:number):Observable<ProductDetailResponse>{
    return this.http.get<ProductDetailResponse>(`${environment.mealDbDetailsUrl}${id}`)
  }

}

