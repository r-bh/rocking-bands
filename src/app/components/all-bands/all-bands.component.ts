import { Component, OnInit } from '@angular/core';
import { BandsService, Band } from '../../services/bands.service'


@Component({
  selector: 'app-all-bands',
  templateUrl: './all-bands.component.html'
})
export class AllBandsComponent implements OnInit {
  myBands: Band[];

  constructor(private _bandsService: BandsService) {

  }

  ngOnInit(): void {
    this.myBands = this._bandsService.getBands();
  }

  removeBand(idx){
    this._bandsService.removeBand(idx);
  }
}
