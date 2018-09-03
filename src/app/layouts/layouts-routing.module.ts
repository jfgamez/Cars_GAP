import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
{
  path: '',
  component: ShellComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: '../home/home.module#HomeModule'
    },
    {
      path: 'detail',
      loadChildren: '../detail/detail.module#DetailModule'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules} )],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
