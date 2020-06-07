import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes


//Services
import { BandsService } from './services/bands.service';

// Components

import { AppComponent } from './app.component';
import { AllBandsComponent } from './components/all-bands/all-bands.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBandsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
