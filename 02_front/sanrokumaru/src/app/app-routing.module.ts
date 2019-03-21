import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './component/pages/login/login.component';
import { EvaluationResultComponent } from './component/pages/evaluation-result/evaluation-result.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'evaluation-result', component: EvaluationResultComponent }
      ]
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
