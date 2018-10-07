import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Sc1001LoginComponent } from './component/sc10/sc1001-login/sc1001-login.component';
import { Sc1003EvaluationResultComponent } from './component/sc10/sc1003-evaluation-result/sc1003-evaluation-result.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/sc1001', pathMatch: 'full' },
        { path: 'sc1001', component: Sc1001LoginComponent },
        { path: 'sc1003', component: Sc1003EvaluationResultComponent }
      ]
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
