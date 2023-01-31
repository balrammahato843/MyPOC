import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsComponent } from './apps/apps.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutModule } from 'src/layout/layout.module';
import { ageRangeValidators } from 'src/layout/reactive-form/form';
import { PrefetchComponent } from '../layout/prefetch/prefetch.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppsComponent,
    PrefetchComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    LayoutModule,
    MatPaginatorModule,
    HttpClientModule
    
  ],
  exports: [AppsComponent],
  providers: [ageRangeValidators],
})
export class AppsModule {}
