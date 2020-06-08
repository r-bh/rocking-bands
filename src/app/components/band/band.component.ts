import { Component, OnInit } from '@angular/core';
import { BandsService, Band } from '../../services/bands.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser'; //para el video de youtube


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
  
})
export class BandComponent {
  band: Band;
  safeURL: SafeUrl;
  safeHtml: SafeHtml;
  videoURL: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _bandsService: BandsService,
    private _sanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.band = this._bandsService.getBand(params['id']);

    })
    this.safeURL = this.band ? this._sanitizer.bypassSecurityTrustResourceUrl(this.band.youtubeURL) : "";

    this.safeHtml = this._sanitizer.bypassSecurityTrustHtml(this.band.info);




  }



}
