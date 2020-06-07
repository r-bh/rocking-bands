import { Component, OnInit } from '@angular/core';
import { BandsService, Band } from '../../services/bands.service'

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html'
})
export class NewBandComponent {

  
  constructor(private _bandsService: BandsService) {

  }

   newBand:Band;

  save(form){
    console.log(form);

    if(form.status=="VALID"){
      this._bandsService.saveBand(form.value);
      // this._bandsService.saveBand(this.newBand);
      form.reset();
    }

  }
  

}
