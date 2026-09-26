import { Component } from '@angular/core';

import { ToolbarContent } from '../toolbar-content/toolbar-content';
import { Footer } from '../footer/footer';

import { ProductList } from '../../../../culinary/presentation/components/product-list/product-list';

@Component({
  selector: 'app-layout',
  standalone: true,

  imports: [
    ToolbarContent,
    ProductList,
    Footer
  ],

  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {}
