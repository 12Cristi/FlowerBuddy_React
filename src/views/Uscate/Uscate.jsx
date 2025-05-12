import Cards from "../../common/Cards/Cards";
import uscat1 from '../../assets/uscate/uscat1.webp'
import uscat2 from '../../assets/uscate/uscat2.webp'
import uscat3 from '../../assets/uscate/uscat3.webp'
import uscat4 from '../../assets/uscate/uscat4.webp'

export default function Uscate() {
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flowers-content">
          <div>
            <h1>Farmec natural care durează</h1>
            <p>
              Flori uscate – delicate, poetice și surprinzător de rezistente. Fiecare buchet este o poveste presată în timp, păstrând frumusețea florilor într-o formă pură, calmă și elegantă. O alegere stilată pentru cei care iubesc simplitatea naturală, cu un strop de melancolie.
            </p>
          </div>
          <div>
            <p>
              Explorează colecția noastră de flori uscate: spice aurii de grâu, lavandă parfumată, lagurus pufos și craspedia solară – toate combinate armonios pentru aranjamente decorative cu personalitate. Fiecare piesă emană căldură și rafinament, perfectă pentru interioare în stil boho, scandinav sau rustic-chic.
            </p>
          </div>
          <div>

          </div>
        </div>
        <div className="mix-flowers-cards">
          <Cards
            image={uscat1}
            cardPrice={'135.99 Lei'}
            cardTitle={'Achillea Silvestre'}
            cardDescription={'Descoperiți Achillea Silvestre albită roz de la Flower Buddy. Aceste flori uscate frumoase sunt durabile, necesită puțină întreținere și adaugă o atmosferă romantică oricărui interior.'}
          />
          <Cards
            image={uscat2}
            cardPrice={'135.99 Lei'}
            cardTitle={'Cozi de iepure'}
            cardDescription={'Descoperiți farmecul cozilor de iepure uscate natural! Perfecte pentru un aspect natural în interiorul tău. Comandați acum și aduceți frumusețea naturii în casa dumneavoastră! '}
          />
          <Cards
            image={uscat3}
            cardPrice={'135.99 Lei'}
            cardTitle={'Buchet de flori'}
            cardDescription={'Descoperiți Buchetul de flori uscate Maria: un buchet elegant, lung de 70 cm, în nuanțe liniștitoare. Durabil și cu întreținere redusă, perfect pentru orice cameră! Bucurați-vă de frumusețea naturală.'}
          />
          <Cards
            image={uscat4}
            cardPrice={'135.99 Lei'}
            cardTitle={'Trei culori mixte'}
            cardDescription={'Aduceți lumina soarelui în casa dvs. cu buchetul „Mazo Rice Flowers Amarillo”. Acest buchet sustenabil, lung de 70 cm, înveselește orice spațiu și este perfect ca un cadou unic. Comandați acum! '}
          />
        </div>
      </div>
    </>
  );
}
