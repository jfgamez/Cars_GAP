import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatImportsModule } from './mat-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { BaseComponent } from './base/base.component';
import { KeysPipe } from './keys.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatImportsModule
  ],
  declarations: [
    BaseComponent,
    KeysPipe,
    FilterPipe
  ],
  exports: [
    TranslateModule,
    BaseComponent,
    KeysPipe,
    FilterPipe
  ]
})
export class SharedModule { }
