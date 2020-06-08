import { Component, OnInit } from '@angular/core';
import { BandsService, Band } from '../../services/bands.service'
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html'
})
export class NewBandComponent {


  constructor(private _bandsService: BandsService) {

  }

  save(form) {
    console.log(form);

    if (form.status == "VALID") {

      form.value.id = this.getId();
      this._bandsService.saveBand(form.value);
      form.reset();
    }

  }

  private getId() {

    let currentBands: Band[] = this._bandsService.getBands();
    let idsArray: number[]=[];
    let newId: number;
    for (let band of currentBands) {
      idsArray.push(band.id);
    }
    newId = Math.max(...idsArray) + 1;
    console.log(newId);

    return newId;
  }


}
