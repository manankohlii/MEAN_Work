// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button'; // Import necessary Material modules

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatButtonModule // Import necessary Material modules
  ],
  exports: [NavbarComponent]
})
export class SharedModule {}
