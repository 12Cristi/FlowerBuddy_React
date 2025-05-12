import Cards from "../../common/Cards/Cards";
import white from '../../assets/Rectangle.svg'
import mix from '../../assets/mix.svg'
import roses from '../../assets/roses-whitepallete.svg'
import multicolor from '../../assets/muticolor.svg'
import cloud from '../../assets/buchete/cloud.jpg'
import lalele from '../../assets/buchete/lalele.jpg'
import matusa from '../../assets/buchete/matusa.jpg'
import sorbet from '../../assets/buchete/sorbet.jpg'

import './Buchete.css'
import { useNavigate } from "react-router";

export default function Buchete() {
  let navigate = useNavigate();
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flower-content">
          <div>
            <h1>Buchet de flori</h1>
            <p>
              O floare spune ce uneori cuvintele nu pot.
            </p>
          </div>
          <div>
            <p>
              Descoperă buchete create cu suflet, din flori proaspete care transmit dragoste, recunoștință, bucurie sau speranță.
              Fiecare buchet este o poveste, un gest de iubire pură sau o amintire prețioasă.
            </p>
          </div>
          <div>
            <p>
              Fie că vrei să surprinzi pe cineva drag sau să aduci un strop de lumină într-o zi obișnuită, buchetele noastre sunt alese cu grijă
              și livrate cu promisiunea prospețimii și a emoției autentice.
            </p>
          </div>
        </div>
        <div className="mix-flower-cards">
          <Cards
            onClick={() => navigate("/trandafiri")}
            image={white}
            cardTitle={'Buchet trandafiri albi'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            onClick={() => navigate("/trandafiri")}
            image={cloud}
            cardTitle={'Aranjamente pastelate'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            image={lalele}
            onClick={() => navigate("/trandafiri")}
            cardTitle={'Numele buchetului'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            image={matusa}
            onClick={() => navigate("/trandafiri")}
            cardTitle={'Numele buchetului'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            image={sorbet}
            onClick={() => navigate("/trandafiri")}
            cardTitle={'Numele buchetului'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            image={roses}
            onClick={() => navigate("/trandafiri")}
            cardTitle={'Numele buchetului'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            image={mix}
            onClick={() => navigate("/trandafiri")}
            cardTitle={'Numele buchetului'}
            cardPrice={'259.99 Lei'}
          />
          <Cards
            image={multicolor}
            onClick={() => navigate("/trandafiri")}
            cardTitle={'Numele buchetului'}
            cardPrice={'259.99 Lei'}
          />
        </div>
      </div>
    </>
  )
}