import { Routes, RouterModule } from '@angular/router';
import { AllBandsComponent } from './components/all-bands/all-bands.component';
import { BandComponent } from './components/band/band.component';
import { FinderComponent } from './components/finder/finder.component';


const APP_ROUTES: Routes = [
    { path: 'bandas', component: AllBandsComponent },
    { path: 'banda/:id', component: BandComponent },
    { path: 'buscar/:text', component: FinderComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'bandas' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
