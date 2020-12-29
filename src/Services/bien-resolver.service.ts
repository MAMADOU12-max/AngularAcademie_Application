import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BienModal} from '../bienModal';
import {BienService} from './bien.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<BienModal>{

    constructor(private bienService: BienService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BienModal> | Promise<BienModal> | BienModal {
        return this.bienService.getBienById(+route.params['id'])
    }

}

