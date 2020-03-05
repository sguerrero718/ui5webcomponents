import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrigamiFormsModule } from '@codebakery/origami/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import "@ui5/webcomponents/dist/Button";
import { V1Component, V2Component, V3Component, NotFoundComponent } from './components';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    V1Component, V2Component, V3Component, NotFoundComponent, V3Component
  ],
  imports: [ BrowserModule, BrowserAnimationsModule, AppRoutingModule, OrigamiFormsModule, HttpClientModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
    }),  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }