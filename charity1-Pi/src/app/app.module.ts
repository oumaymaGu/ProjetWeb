import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayout } from './layout/component/app.layout'; // Import AppLayout

@NgModule({
  declarations: [
    AppComponent, // Declare only components here, not modules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import routing module here
    AppLayout, // Import AppLayout here if it's standalone
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
