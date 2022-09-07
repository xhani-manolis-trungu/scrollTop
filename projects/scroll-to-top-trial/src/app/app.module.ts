import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollTopModule } from 'scroll-top';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongListComponent } from './long-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
