import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ThreadComponent } from './pages/thread/thread.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "thread/:id", component: ThreadComponent},
  {path: "profile/:id", component: ProfileComponent},
  {path: "category/:id", component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
