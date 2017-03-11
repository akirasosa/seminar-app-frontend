import {Routes} from "@angular/router";
import {TopComponent} from "./top/top.component";
import {RegistrationComponent} from "./registration/registration.component";
import {TopGuard} from "./top/top.guard";
import {AwsSettingResolver} from "../services/aws-setting.resolver";

export const ROUTES: Routes = [
  {
    path: '',
    component: TopComponent,
    canActivate: [TopGuard],
    resolve: {setting: AwsSettingResolver},
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];
