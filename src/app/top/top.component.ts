import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AwsSetting} from "../../domain/aws-setting";

@Component({
  selector: 'sa-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  setting: AwsSetting;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { setting: AwsSetting }) => {
        this.setting = data.setting;
      });
  }

}
