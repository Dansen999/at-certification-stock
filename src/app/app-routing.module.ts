import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SentimentComponent} from "./pages/sentiment/sentiment.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [

  {path: 'sentiment/:symbol', component: SentimentComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
