import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { employee } from 'src/layout/model';
import { ApiService } from 'src/layout/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class TestResolver implements Resolve<any> 

{
  constructor(private service : ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
    return this.service.getEmployee()
  }
}
