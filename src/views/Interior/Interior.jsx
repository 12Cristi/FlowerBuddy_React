import Cards from "../../common/Cards/Cards";
import ureche from '../../assets/interior/ureche.webp'
import crin from '../../assets/interior/palmier.jpg'
import cala from '../../assets/interior/palmier2.jpg'
import picior from '../../assets/interior/picior.jpg'


export default function Interior() {
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flowers-content">
          <div>
            <h1>Verdele care transformă spațiul</h1>
            <p>
              Florile și plantele de interior aduc prospețime, echilibru și o energie subtilă în orice încăpere. Fiecare specie are o personalitate aparte – de la frunzele ample ale „urechii elefantului” până la delicatețea candelei albe de „crinul păcii”. Descoperă colecția noastră de plante de interior, alese nu doar pentru frumusețea lor, ci și pentru ușurința în îngrijire.
            </p>
          </div>
          <div>
            <p>
              Natură în formă pură, pentru sufletul casei
            </p>
          </div>
          <div>
            <p>
              Plantele noastre decorative sunt perfecte pentru birouri, livinguri luminoase, dormitoare sau spații comerciale. Fie că alegi o plantă cu aer tropical, minimalist sau sofisticat, fiecare contribuie la un decor viu și echilibrat.
            </p>
          </div>
        </div>
        <div className="mix-flowers-cards">
          <Cards
            image={ureche}
            cardTitle={'Urechea Elefantului'}
            cardDescription={'Frunze mari, lucioase, cu aspect sculptural – o piesă statement în orice cameră. Preferă lumina filtrată și solul ușor umed.'}
            cardPrice={'135.99 Lei'}
          />
          <Cards
            image={crin}
            cardTitle={'Crinul Păcii'}
            cardDescription={'O plantă elegantă, cu flori albe și frunze lucioase, cunoscută pentru proprietățile purificatoare ale aerului.'}
            cardPrice={'135.99 Lei'}
          />
          <Cards
            image={cala}
            cardPrice={'135.99 Lei'}
            cardTitle={'Cala Albă'}
            cardDescription={'Delicată și rafinată, cu flori albe în formă de pâlnie. Preferă locuri luminoase, dar ferite de razele directe ale soarelui.'}
          />
          <Cards
            image={picior}
            cardPrice={'135.99 Lei'}
            cardTitle={'Picior de Elefant'}
            cardDescription={'Tulpină bombată și frunze înguste, arcuite – o alegere excentrică și decorativă, fiind o plantă perfectă pentru spații moderne.'}
          />
        </div>
      </div>
    </>
  );
}
