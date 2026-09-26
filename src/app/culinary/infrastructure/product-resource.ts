export interface ProductResource {
  idMeal:string;
  strMeal:string;
  strMealThumb:string;
  strCategory:string;
}

export interface ProductDetailResource {
  ideMeal:string;
  strMeal:string;
  strMealThumb:string;
  strCategory:string;
  strInstruccions:string;
  [key:string]:string | null;
}
