import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Route, UrlSegment, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate{
    constructor() { }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        console.log('Can Match');
        console.log({route, segments})
        return false;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('Can Activate');
        console.log({route, state})

        return true;
    }
}
