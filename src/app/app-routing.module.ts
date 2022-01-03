import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryTest1Component } from './query-test1/query-test1.component';

const routes: Routes = [
  { path: 'qtest/:qd', component: QueryTest1Component },
  { path: '**', redirectTo: 'qtest/some_dummy_data' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
