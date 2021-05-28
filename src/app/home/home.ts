import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component(
  {
    selector: 'app-home',
    templateUrl: 'home.html'
  }  )

  export class HomePage
  {
    constructor(public navCtrl: NavController)
    {
    }

    sayHello(testo: string)
    {
      testo= 'hello world';
      console.log(testo);
    }
  }
