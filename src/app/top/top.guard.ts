import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TopGuard implements CanActivate {

  constructor(private router: Router, private http: Http) {
  }

  canActivate(): Observable<boolean> {
    return this.http.get('/api/registrations')
      .map(res => {
        if (res.text() === '') {
          this.router.navigateByUrl('/registration');
          return false;
        }
        return true;
      });
  }

}
