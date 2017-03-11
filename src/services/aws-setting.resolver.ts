import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import {Registration} from "../domain/registration";

@Injectable()
export class AwsSettingResolver implements Resolve<any> {

  constructor(private http: Http) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('/api/registrations')
      .map(res => res.json())
      .mergeMap((registration: Registration) => {
        return this.http
          .get(`/api/aws_settings/registration_id/${registration.id}`)
          .map(res => res.json());
      });
  }

}
