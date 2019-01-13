import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawerCanvasComponent } from './drawer-canvas/drawer-canvas.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerCanvasComponent,
    ColorPickerComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
