import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGuard } from 'src/guard/demo.guard';
import { AboutComponent } from 'src/layout/about/about.component';
import { ParentComponent } from 'src/layout/communication/parent/parent.component';
import { ContactComponent } from 'src/layout/contact/contact.component';
import { CoursedataService } from 'src/layout/coursedata.service';
import { HomepageComponent } from 'src/layout/homepage/homepage.component';
import { ListComponent } from 'src/layout/list/list.component';
import { employee } from 'src/layout/model';
import { ParentCompComponent } from 'src/layout/parent-comp/parent-comp.component';
import { PrefetchComponent } from 'src/layout/prefetch/prefetch.component';
import { ReactiveFormComponent } from 'src/layout/reactive-form/reactive-form.component';
import { PaginationComponent } from 'src/layout/table-pagination-example/pagination.component';
import { TestResolver } from 'src/resolver/test.resolver';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'communication', component: ParentComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'prefetch', component: PrefetchComponent , resolve : { courseData : CoursedataService}},
  {path : 'list' , component : ListComponent , canActivate : [DemoGuard] , resolve : { result : TestResolver}},
{path:'parent-comm' , component :ParentCompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
