import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ResizableModule,
    CdkDrag,
    BrowserAnimationsModule,
    MatIconModule,
    CdkDragHandle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
