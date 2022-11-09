import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SentimentPageComponent} from "./pages/sentiment-page/sentiment-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [

  {path: 'sentiment/:symbol', component: SentimentPageComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
