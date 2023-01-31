import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ChildComponent } from './communication/child/child.component';
import { ParentComponent } from './communication/parent/parent.component';
import { PaginationComponent } from './table-pagination-example/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CheckNumDirective } from './check-num.directive';
import { MatSortModule } from '@angular/material/sort';
import { ListComponent } from './list/list.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    ReactiveFormComponent,
    ChildComponent,
    ParentComponent,
    PaginationComponent,
    CheckNumDirective,
    ListComponent,
    ParentCompComponent,
    ChildCompComponent
    
  
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    RouterModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    ChildComponent,
    ParentComponent,
    ListComponent
  ],
})
export class LayoutModule {}
