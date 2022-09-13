import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaCadastroComponent } from './telas/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
