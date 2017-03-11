import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'sa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.http.post('/api/registrations', '')
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

}
