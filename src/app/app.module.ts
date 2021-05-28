import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home';

@NgModule(
  {
  declarations:
  [
    AppComponent,
    HomePage
  ],
  entryComponents:
  [],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers:
  [
    {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
    }
  ],
  bootstrap:
  [
    AppComponent
  ],
})
export class AppModule {}
