import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawerCanvasComponent } from './drawer-canvas/drawer-canvas.component';
import { BrandComponent } from './brand/brand.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerCanvasComponent,
    BrandComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
