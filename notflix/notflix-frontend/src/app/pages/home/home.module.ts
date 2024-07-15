import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})
export class HomeModule {}
