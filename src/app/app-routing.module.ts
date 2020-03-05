import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Component, V2Component, V3Component, NotFoundComponent } from './components';

const routes: Routes = [
  { path: '', component: V1Component }
  , { path: 'v2', component: V2Component }
  , { path: 'v3', component: V3Component }
  , { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
