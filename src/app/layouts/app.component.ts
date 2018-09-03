import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  template: `<router-outlet></router-outlet><ng2-toasty [position]="'top-right'"></ng2-toasty>`
  // , encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    translate: TranslateService
  ) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(es)/gi.test('en') ? userLang : 'es';
    translate.setDefaultLang('es');
    translate.use(userLang);
  }

  ngOnInit() {
  }

}
