import { Component ,EventEmitter,Input,Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core'
import {Product} from '../../../domain/model/product.entity';

@Component({
  imports: [TranslatePipe],
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input({required:true})
  product!: Product;

  @Output() prepare = new EventEmitter<number>();
  openDetails():void{
    window.open(this.product.detailUrl),'_blank','noopener,noreferrer';
  };
  openPreparation():void {
    this.prepare.emit(this.product.id);
  }
}


