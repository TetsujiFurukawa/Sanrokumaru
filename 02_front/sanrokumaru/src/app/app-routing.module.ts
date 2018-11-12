import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { If1001LoginComponent } from './component/if10/if1001-login/if1001-login.component';
import { If1003EvaluationResultComponent } from './component/if10/if1003-evaluation-result/if1003-evaluation-result.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/if1001', pathMatch: 'full' },
        { path: 'if1001', component: If1001LoginComponent },
        { path: 'if1003', component: If1003EvaluationResultComponent }
      ]
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
