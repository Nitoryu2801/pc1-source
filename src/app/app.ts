import { Component, signal } from '@angular/core';
import { Layout } from './shared/presentation/components/layout/layout';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[Layout],
  template: `<app-layout/>`
})
export class App {
  protected readonly title = signal('Culinary-Recipe-Institute');
}
