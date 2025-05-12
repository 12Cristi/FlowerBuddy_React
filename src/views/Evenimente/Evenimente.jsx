import Cards from "../../common/Cards/Cards";
import cada from '../../assets/evenimente/cada.jpg'
import farfurie from '../../assets/evenimente/farfurie.jpg'
import scaune from '../../assets/evenimente/scaune.jpg'
import candy from '../../assets/evenimente/candy.jpg'





export default function Evenimente() {
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flowers-content">
          <div>
            <h1>Evenimente înfloritoare, cu aranjamente create pe măsura emoției</h1>
            <p>
              Fiecare eveniment are o poveste. Noi o spunem prin flori. De la nunți de vis și botezuri delicate, la aniversări pline de culoare sau evenimente corporate cu stil, realizăm aranjamente florale care dau viață atmosferei și subliniază identitatea momentului. Totul este gândit până la cel mai mic detaliu – cromatică, stil, volum și simbolistică.
            </p>
          </div>
          <div>
            <p>
              Lucrăm alături de tine pentru a crea compoziții florale care să reflecte tematica evenimentului și personalitatea ta: buchete de mireasă, aranjamente pentru mese, decoruri pentru arcadă, florile domnișoarelor de onoare, panouri florale sau detalii discrete pentru candy bar. Folosim flori naturale de sezon sau mixuri speciale, în funcție de dorințele tale.
            </p>
          </div>
        </div>
        <div className="mix-flowers-cards">
          <Cards
            image={cada}
            cardTitle={'Cada decorativa'}
            cardDescription={'Cada cu picioare decorativă este un element spectaculos de decor, perfect pentru evenimente cu tematică outdoor, garden party sau petreceri nonconvenționale.Poate fi folosită ca suport de băuturi răcoritoare sau sticle de prosecco, creând un punct de atracție original și inedit în zona de welcome sau bar.'}
            cardPrice={'500 Lei'}
          />
          <Cards
            image={candy}
            cardTitle={'Mese Candy Bar'}
            cardDescription={'Setul de mese pentru Candy Bar este soluția ideală pentru a crea un colț dulce spectaculos și elegant la orice eveniment.Sunt perfecte pentru nunți, botezuri, aniversări și evenimente corporate, adăugând un plus de rafinament și stil decorului. Piesele pot fi folosite împreună sau separat, în funcție de conceptul evenimentului.'}
            cardPrice={'135.99 Lei'}
          />
          <Cards
            image={farfurie}
            cardPrice={'15.99 Lei'}
            cardTitle={'Farfurii suport model'}
            cardDescription={'Inspirate de ceramica tradițională italiană, aceste farfurii suport aduc culoare, personalitate și un aer mediteranean oricărui eveniment. Cu un model vibrant în tonuri de albastru și alb, farfuriile sunt ideale pentru evenimente în aer liber, nunți cu tematică italiană, cine de vară sau decoruri inspirate din stilul coastal.'}
          />
          <Cards
            image={scaune}
            cardPrice={'13.99 Lei'}
            cardTitle={'Scaune de lemn Pilgrim'}
            cardDescription={'Scaunele Pilgrim sunt o alegere versatilă și elegantă pentru evenimente care îmbină naturalețea cu rafinamentul. Din lemn masiv, cu spătar în formă de X și un design atemporal, scaunele oferă un plus de stil oricărui decor.Se potrivesc perfect în decoruri rustice, garden party-uri, în interior și în aer liber.'}
          />
        </div>
      </div>
    </>
  );
}
