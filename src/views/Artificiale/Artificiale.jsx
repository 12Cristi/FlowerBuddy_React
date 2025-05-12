import Cards from "../../common/Cards/Cards";
import art1 from '../../assets/artificial/art1.webp'
import art2 from '../../assets/artificial/art2.webp'
import art3 from '../../assets/artificial/art3.webp'
import art4 from '../../assets/artificial/art4.webp'
import art5 from '../../assets/artificial/art5.webp'
import art6 from '../../assets/artificial/art6.webp'
import art7 from '../../assets/artificial/art7.webp'
import art8 from '../../assets/artificial/art8.webp'
import { useNavigate } from "react-router";

export default function Artificiale() {
  let navigate = useNavigate();
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flower-content">
          <div>
            <h1>Frumusețe eternă, fără compromis</h1>
            <p>
              Descoperă colecția noastră de flori artificiale – creații atent realizate, care păstrează farmecul florilor naturale, dar oferă durabilitate, zero întreținere și stil permanent. Fiecare floare este reprodusă cu migală pentru a reda textura, forma și culorile autentice, transformând orice decor într-un spațiu rafinat și plin de viață.
            </p>
          </div>
          <div>
            <p>
              Alege flori artificiale care impresionează prin realism și detalii impecabile: trandafiri catifelați, bujori plini de volum, orhidee sofisticate sau crizanteme luminoase. Fie că le folosești în aranjamente, buchete sau ca piese de decor individuale, florile noastre sunt o alternativă practică și estetică de durată.
            </p>
          </div>
          <div>
            <p>
              Florile artificiale sunt perfecte pentru spații greu accesibile, evenimente de lungă durată, restaurante, birouri sau interioare în care prospețimea constantă e esențială. Nu se ofilesc, nu necesită apă și pot fi repoziționate ușor. Livrare rapidă și selecție variată de culori, texturi și stiluri.
            </p>
          </div>
        </div>
        <div className="mix-flower-cards">
          <Cards
            onClick={() => navigate("/trandafiri")}
            image={art1}
            cardTitle={'Hortensie artificială verde uscată'}
            cardPrice={'119.99 Lei'}
          />
          <Cards
            onClick={() => navigate("/trandafiri")}
            image={art2}
            cardTitle={'Crema artificială Tall Sweet Pea'}
            cardPrice={'39.99 Lei'}
          />
          <Cards
            image={art3}
            cardTitle={'Peonie artificială Blush Pink Classic'}
            cardPrice={'99.99 Lei'}
          />
          <Cards
            image={art4}
            cardTitle={'Magnolie albă înaltă artificială'}
            cardPrice={'45.99 Lei'}
          />
          <Cards
            image={art5}
            cardTitle={'Orhidee Oncidium albă artificială'}
            cardPrice={'159.99 Lei'}
          />
          <Cards
            image={art6}
            cardTitle={'Peonie albă artificială mare'}
            cardPrice={'59.99 Lei'}
          />
          <Cards
            image={art7}
            cardTitle={'Iarbă artificială verde cu coadă de vulpe înaltă'}
            cardPrice={'79.99 Lei'}
          />
          <Cards
            image={art8}
            cardTitle={'Hortensie Paniculata verde artificială'}
            cardPrice={'99.99 Lei'}
          />
        </div>
      </div>
    </>
  );
}
