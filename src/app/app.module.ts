import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import{APP_ROUTING} from './app.routes';

//Services
import { BandsService } from './services/bands.service';

// Components

import { AppComponent } from './app.component';
import { AllBandsComponent } from './components/all-bands/all-bands.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BandComponent } from './components/band/band.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBandsComponent,
    NavbarComponent,
    BandComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
