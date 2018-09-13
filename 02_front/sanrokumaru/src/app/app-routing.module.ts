import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Sc1001LoginComponent } from './sc10/sc1001-login/sc1001-login.component';
import { Sc1003EvaluationResultListComponent } from './sc10/sc1003-evaluation-result-list/sc1003-evaluation-result-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/sc1001', pathMatch: 'full' },
        { path: 'sc1001', component: Sc1001LoginComponent },
        { path: 'sc1003', component: Sc1003EvaluationResultListComponent }
      ]
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
