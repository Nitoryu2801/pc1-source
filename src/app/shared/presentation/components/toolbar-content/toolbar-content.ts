import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

import { LogoDevApi } from '../../../infrastructure/logo-dev-api';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  templateUrl: './toolbar-content.html',
  imports: [
    TranslatePipe
  ],
  styleUrl: './toolbar-content.css'
})
export class ToolbarContent {

  private translate = inject(TranslateService);
  private logoDevApi = inject(LogoDevApi);

  logoUrl = this.logoDevApi.getLogoUrl();

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
