import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SecurityService } from "./security.service";

@Injectable()
export class SecurityRouter implements CanActivate {
    constructor(private securityService: SecurityService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.securityService.onSesion()) {
            return true
        } else {
            this.router.navigate(['/login'])
            return false
        }
    }

}