import Cards from "../../common/Cards/Cards";
import statue from '../../assets/aranjamente/statue.jpg'
import easter from '../../assets/aranjamente/easter.jpg'
import lalele from '../../assets/aranjamente/lalele.jpg'
import matusa from '../../assets/aranjamente/matusa.jpg'

import './Aranjamente.css'

export default function Aranjamente() {
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flowers-content">
          <div>
            <h1>Aranjamente florale care spun povești</h1>
            <p>
              Adu frumusețea naturii în orice spațiu cu aranjamente florale create cu măiestrie – perfecte pentru evenimente, decoruri interioare sau cadouri elegante.
            </p>
          </div>
          <div>
            <p>
              Alege dintre aranjamente clasice, moderne sau rustice, realizate din flori proaspete sau artificiale de înaltă calitate. Fiecare compoziție este gândită pentru a transmite emoție și rafinament.
            </p>
          </div>
          <div>
            <p>
              Fiecare aranjament este lucrat manual de artiști florali experimentați, care pun accent pe detalii și armonie cromatică. Livrare rapidă și garanția prospețimii.
            </p>
          </div>
        </div>
        <div className="mix-flowers-cards">
          <Cards
            image={matusa}
            cardTitle={'Eleganță Nordică'}
            cardDescription={'Aranjament cu eucalipt și flori albe de orhidee cymbidium, într-un suport din sticlă transparentă cu bază de pietre decorative. Aerisit, echilibrat, perfect pentru birouri sau spații moderne în stil scandinav.'}
            cardPrice={'135.99 Lei'}
          />
          <Cards
            image={lalele}
            cardTitle={'Simplitate Urbană'}
            cardDescription={'Aranjament cu eucalipt și flori albe de orhidee cymbidium, într-un suport din sticlă transparentă cu bază de pietre decorative. Aerisit, echilibrat, perfect pentru birouri sau spații moderne în stil scandinav.'}
            cardPrice={'135.99 Lei'}
          />
          <Cards
            image={easter}
            cardPrice={'135.99 Lei'}
            cardTitle={'Geometrie Verde'}
            cardDescription={'Aranjament cu eucalipt și flori albe de orhidee cymbidium, într-un suport din sticlă transparentă cu bază de pietre decorative. Aerisit, echilibrat, perfect pentru birouri sau spații moderne în stil scandinav.'}
          />
          <Cards
            image={statue}
            cardPrice={'135.99 Lei'}
            cardTitle={'Viziune nocturna'}
            cardDescription={'Aranjament cu eucalipt și flori albe de orhidee cymbidium, într-un suport din sticlă transparentă cu bază de pietre decorative. Aerisit, echilibrat, perfect pentru birouri sau spații moderne în stil scandinav.'}
          />
        </div>
      </div>
    </>
  );
}
