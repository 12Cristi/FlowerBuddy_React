import './Trandafiri.css'
import couple from '../../assets/cute_couple.svg';
import star from '../../assets/Star.svg';
import Button from '../../common/Button/Button';
import { useState } from 'react';

export default function Buchete() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: 'Buchet de trandafiri albi',
      price: 259.99,
      quantity: 1,
    };

    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });

    console.log('Cart updated:', cart); // de test
  };

  return (
    <>
      <section className="rose-section">
        <div class="banner">BUCHETE TRANDAFIRI
        </div>
        <div className="main-content">
          <div className="content">
            <img src={couple} alt="cute-couple-kissing" />
          </div>
          <div className="rose-content">
            <div className="rose-content-title">Buchet de trandafiri albi</div>
            <div className="rose-rating">
              <img src={star} alt="rating-start" />
              <img src={star} alt="rating-start" />
              <img src={star} alt="rating-start" />
              <img src={star} alt="rating-start" />
              <img src={star} alt="rating-start" />

            </div>
            <div className="rose-price">259.99 RON</div>
            <div className="infobox">
              <strong>
                Transport gratuit la produse in valaore de 300 lei
              </strong>
            </div>
            <div className="add-to-cart">
              <Button
                onClick={() => console.log('clicked')}
                className={'add-to-cart'}
                buttonName={'Comanda acum'}
              />
            </div>

            <div className="rose-description">
              <p>Buchete de trandafiri elegante și rafinate, perfecte pentru orice ocazie specială</p>
              <p>Alege dintr-o selecție variată de trandafiri proaspeți, disponibili într-o gamă de culori simbolice: roșii
                pentru dragoste pasională, albi pentru puritate și eleganță, galbeni pentru prietenie și optimism, și roz
                pentru admirație și recunoștință</p>
              <p>
                Fiecare buchet este aranjat cu grijă de florari pricepuți, oferind un cadou de neuitat, ideal pentru
                aniversări, zile de naștere, nunți sau pentru a surprinde pe cineva drag. Livrare rapidă și garanția
                prospețimii florilor!
              </p>

            </div>
          </div>

        </div>
      </section>

    </>
  );
}
