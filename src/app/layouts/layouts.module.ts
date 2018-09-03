import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { MatImportsModule } from '../shared/mat-imports.module';
import { ShellComponent } from './shell/shell.component';
import { AppComponent } from './app.component';
import { ToastyModule } from 'ng2-toasty';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { LoggerService } from '../core/logger.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatImportsModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    ShellComponent,
    AppComponent,
    TopBarComponent,
  ],
  providers: [
    LoggerService
  ]
})
export class LayoutsModule { }
