import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollTopComponent } from './scroll-top.component';
import { ScrollTopDirective } from './scroll-top.directive';

@NgModule({
  declarations: [
    ScrollTopComponent,
    ScrollTopDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollTopComponent,
    ScrollTopDirective
  ]
})
export class ScrollTopModule { }
