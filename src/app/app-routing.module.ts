import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { HomeComponent } from './sample-component/home/home.component';
import { TryPageComponent } from './components/try-page/try-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';

const routes: Routes = [
  // Sample Route
  { path: '', component: HomeComponent },
  { path: 'try-page', component: TryPageComponent },
  { path: 'try-page/:id', component: TryPageComponent },
  { path: 'form-page', component: FormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
