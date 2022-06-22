import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothModule } from './cloth/cloth.module';
import { KidsStuffModule } from './kidsStuff/kidsStuff.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClothModule,
    KidsStuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
