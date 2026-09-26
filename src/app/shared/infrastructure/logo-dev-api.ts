import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
@Injectable({providedIn: 'root'})
export class LogoDevApi {
  getLogoUrl():string {
    return `${environment.logoDevToken}`;
  }
}
