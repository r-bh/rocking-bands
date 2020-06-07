import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsService, Band } from './../../services/bands.service'


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html'
})
export class FinderComponent implements OnInit {

  matchingBands:Band[];

  constructor(private activatedRoute: ActivatedRoute,
    private _bandsService: BandsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.matchingBands = this._bandsService.searchBand(params['text']);
    })

  }
}
