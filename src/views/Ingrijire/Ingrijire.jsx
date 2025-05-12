import './Ingrijire.css'

export default function Ingrijire() {
  return (
    <>
      <div className="mix-flower">
        <div className="mix-flower-content care">
          <div>
            <h1>Îngrijirea plantelor – ritualul verde care aduce echilibru</h1>
            <p>
              Fiecare plantă are nevoie de puțină grijă pentru a-ți răsplăti spațiul cu prospețime, culoare și liniște. Îți oferim ghiduri simple, sfaturi utile și produse dedicate pentru ca plantele tale – fie ele naturale, uscate sau artificiale – să arate impecabil și să reziste în timp.
            </p>
            <h1></h1>
          </div>

        </div>
        <div className="mix-flower-cards">
          <section className="plant-care-section">
            <h2>Îngrijirea plantelor</h2>
            <p>
              Fiecare plantă are nevoie de puțină atenție pentru a-și păstra frumusețea și vitalitatea. Îți oferim sfaturi simple, practice și ușor de urmat.
            </p>

            <div>
              <h3>🌿 Plante naturale</h3>
              <ul>
                <li>Lumină difuză sau directă, în funcție de specie</li>
                <li>Udare moderată – evită excesul</li>
                <li>Curățare regulată a frunzelor</li>
                <li>Ghivece cu drenaj eficient</li>
              </ul>
            </div>

            <div>
              <h3>🌾 Flori uscate</h3>
              <ul>
                <li>Se păstrează în locuri uscate, ferite de umiditate</li>
                <li>Curățare ușoară cu pensulă moale sau aer rece</li>
                <li>Protecție față de soarele direct</li>
              </ul>
            </div>

            <div>
              <h3>🌸 Flori artificiale</h3>
              <ul>
                <li>Ștergere periodică cu lavetă umedă sau antistatică</li>
                <li>Evită lumina directă pentru a preveni decolorarea</li>
                <li>Rearanjează pentru a menține forma și volumul</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

    </>
  );
}
