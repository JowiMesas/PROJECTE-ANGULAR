import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './component_exemple/exemple.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    RegistreUsuariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
