import { Injectable } from '@angular/core';

@Injectable()
export class BandsService {

    private myBands: Band[] =
        [{ name: 'The Rolling Stones', place: 'Reino Unido', year: '1962', info: 'infooo' },
        { name: 'Led Zeppelin', place: 'Reino Unido', year: '1968 ', info: 'infooo' },
        { name: 'Queen', place: 'Reino Unido', year: '1970', info: 'infooo' },
        { name: 'Pink Floyd', place: 'Reino Unido', year: '1965', info: 'infooo' },
        { name: 'Deep Purple', place: 'Reino Unido', year: '1968', info: 'infooo' },
        { name: 'AC/DC', place: 'Australia', year: '1973', info: 'infooo' },
        { name: 'The Ramones', place: 'Estados Unidos', year: '1974', info: 'infooo' },
        { name: 'Kiss', place: 'Estados Unidos', year: '1973', info: 'infooo' }];


    constructor() {
    }


    getBands(): Band[] {
        return this.myBands;
    }

    removeBand(idx: number) {
        this.myBands.splice(idx, 1);
    }

    getBand(idx: number) {
        return this.myBands[idx];
    }

    saveBand(newBand: Band) {
        this.myBands.push(newBand);
    }

    searchBand(text: string) {
        let bandArr = [] as Band[];
        text = text.toLowerCase();
        for (let band of this.myBands) {
            let name = band.name.toLowerCase();
            if (name.indexOf(text) >= 0) {
                bandArr.push(band);
            }
        }
        return bandArr;

    }



}



export interface Band {
    name: string,
    place: string,
    year: string,
    info: string
};