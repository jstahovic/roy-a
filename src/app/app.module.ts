import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RedModule } from './red/red.module'
import { OrangeModule } from './orange/orange.module'
import { YellowModule } from './yellow/yellow.module'
import { HomeComponent } from './home/home.component'
import { VoidComponent } from './void/void.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, VoidComponent],
  imports: [BrowserModule, AppRoutingModule, RedModule, OrangeModule, YellowModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
