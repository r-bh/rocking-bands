import { Component, OnInit } from '@angular/core';
import { BandsService, Band } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html'
})
export class BandComponent {
  band: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _bandsService: BandsService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.band = this._bandsService.getBand(params['id']);
    })

  }



}
