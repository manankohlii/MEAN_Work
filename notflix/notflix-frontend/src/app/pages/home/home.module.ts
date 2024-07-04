// src/app/pages/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module'; // Import SharedModule

@NgModule({
  declarations: [
    HomeComponent,
    // Remove NavbarComponent from here
  ],
  imports: [
    CommonModule,
    SharedModule // Import SharedModule
  ]
})
export class HomeModule {}
