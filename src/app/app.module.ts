import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {TopComponent} from "./top/top.component";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {RegistrationComponent} from "./registration/registration.component";
import {TopGuard} from "./top/top.guard";
import {AwsSettingResolver} from "../services/aws-setting.resolver";

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    AwsSettingResolver,
    TopGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
