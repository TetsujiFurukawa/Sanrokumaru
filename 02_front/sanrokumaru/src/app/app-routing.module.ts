import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './component/pages/sign-in/sign-in.component';
import { EvaluationResultComponent } from './component/pages/evaluation-result/evaluation-result.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/signIn', pathMatch: 'full' },
        { path: 'signIn', component: SignInComponent },
        { path: 'evaluation-result', component: EvaluationResultComponent }
      ]
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
