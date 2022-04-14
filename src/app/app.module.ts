import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { GiphyComponent } from './giphy/giphy.component';
import { FormComponent } from './form/form.component';
import { GiphyDetailComponent } from './giphy/giphy-detail/giphy-detail.component';
import { HttpClientModule } from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GiphyComponent,
    FormComponent,
    GiphyDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
