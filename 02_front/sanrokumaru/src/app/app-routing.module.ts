import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './component/pages/company-detail/company-detail.component';
import { CompanyListComponent } from './component/pages/company-list/company-list.component';
import { EvaluationResultComponent } from './component/pages/evaluation-result/evaluation-result.component';
import { SignInComponent } from './component/pages/sign-in/sign-in.component';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/signIn', pathMatch: 'full' },
        { path: 'signIn', component: SignInComponent },
        { path: 'company-list', component: CompanyListComponent },
        { path: 'company-detail', component: CompanyDetailComponent },
        { path: 'evaluation-result', component: EvaluationResultComponent }
      ]
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
