import { Injectable } from '@angular/core';

@Injectable()
export class BandsService {

    private myBands: Band[] =
        [{
            name: 'The Rolling Stones', place: 'Reino Unido', year: '1962', info: `
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
      ` ,
            youtubeURL: "https://www.youtube.com/embed/mcdNfsO73ZQ"
        },
        {
            name: 'Led Zeppelin', place: 'Reino Unido', year: '1968 ', info: `
     <p>   Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).

     </p> <p>Led Zeppelin presentó elementos de un amplio espectro de influencias, como el blues, el rock and roll, el soul, la música celta, la música india, el folk, y el country.
     </p> <p>
Más de treinta años después de la disgregación de la banda en 1980, la música de Led Zeppelin continúa vendiéndose, disfruta de una amplia difusión radiofónica, y ha demostrado ser una de las bandas más influyentes en la música rock. Hasta la fecha, ha vendido más de 300 millones de álbumes en el mundo, incluidos 111 millones sólo en los Estados Unidos,2​.
 Es, junto a los Beatles, la banda con más discos de diamante de la historia de la música (otorgados cada diez millones de ventas en EE. UU.).
 Los discos con esta certificación son: Led Zeppelin IV (23 millones), Physical Graffiti (15 millones), Led Zeppelin II (12 millones), Houses of the Holy (11 millones) , Led Zeppelin I (10 millones) y Box Set (10 millones). En 2004, la revista Rolling Stone los clasificó en el número 14 
 en su lista de los «100 artistas más grandes de todos los tiempos». </p>`, youtubeURL: "https://www.youtube.com/embed/mMLiThPS30o"
        },
        { name: 'Queen', place: 'Reino Unido', year: '1970', info: 'Work in progress... sólo hay info en The Rolling Stones y Led Zeppelin' },
        { name: 'Pink Floyd', place: 'Reino Unido', year: '1965', info: 'Work in progress... sólo hay info en The Rolling Stones y Led Zeppelin' },
        { name: 'Deep Purple', place: 'Reino Unido', year: '1968', info: 'Work in progress... sólo hay info en The Rolling Stones y Led Zeppelin' },
        { name: 'AC/DC', place: 'Australia', year: '1973', info: 'Work in progress... sólo hay info en The Rolling Stones y Led Zeppelin' },
        { name: 'The Ramones', place: 'Estados Unidos', year: '1974', info: 'Work in progress... sólo hay info en The Rolling Stones y Led Zeppelin' },
        { name: 'Kiss', place: 'Estados Unidos', year: '1973', info: 'Work in progress... sólo hay info en The Rolling Stones y Led Zeppelin' }];


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
    info: string,
    youtubeURL?: string
};