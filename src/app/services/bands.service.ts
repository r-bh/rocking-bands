import { Injectable } from '@angular/core';

@Injectable()
export class BandsService {

    private myBands: Band[] =
        [{ name: 'The Rolling Stones', place: 'Reino Unido', year: '1962',info: `
        <p><strong>The Rolling Stones</strong> es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick
        Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.​ Brian Jones fue despedido en junio de 1969,
        falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y
        sería a su vez reemplazado por Ronnie Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones
        que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.</p>
        <p>
          Están considerados como una de las más grandes e influyentes bandas de toda la historia del rock,3​ siendo una de
          las agrupaciones que sentó las bases del rock contemporáneo. Contando desde sus inicios con el favor de la
          crítica, algunos de sus materiales están considerados de los mejores de todos los tiempos;7​8​9​10​ entre ellos
          destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St.
          (1972).En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista
          estadounidense Rolling Stone los colocó en el puesto n.º 4 en su lista de Los 50 mejores artistas de todos los
          tiempos.11​ Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida
          trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan
          siendo la banda más longeva de la historia del rock.
        </p>
      <p>Para ir a su página de Wikipedia, donde encontrarás mucha más información, haz click <a target="_blank" href="https://es.wikipedia.org/wiki/The_Rolling_Stones">aquí</a>.</p>
      <p>Aquí puedes ver una recopilación de sus mejores canciones:</p>  
      
      ` },
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