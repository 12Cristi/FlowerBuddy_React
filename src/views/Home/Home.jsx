import roses from '../../assets/home/roses2.svg';
import Input from '../../common/Input/Input';
import mixed from '../../assets/home/wild.svg';
import sfetsnic from '../../assets/home/sfetsnic.svg'
import './Home.css'
import { useNavigate } from "react-router";
import { useState } from 'react';
export default function Home() {
  let navigate = useNavigate();
  const [email, subscribedEmail] = useState('');


  return (
    <>
      <div className="main-content-home">
        <div className="main-content-title">
          <h1>FlowerBuddy</h1>
          <div>Inveseliti ziua cuiva cu Flower Buddy</div>
        </div>
        <div className="main-content-images">
          <div className="roses-images" onClick={() => navigate("/buchete-flori")}>
            <img src={roses} alt="white roses" />
            <div>Buchete trandafiri</div>
          </div>
          <div className="roses-images" onClick={() => navigate("/aranjamente-florale")} >
            <img src={mixed} alt="white roses" />
            <div>Mix Flori</div>
          </div>
          <div className="roses-images" onClick={() => navigate("/evenimente")} >
            <img src={sfetsnic} alt="white roses" />
            <div>Evenimente</div>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribe-details-entry">
          <h3>Abonează-te și află ultimele noutăți</h3>
          <div className="subscribe-section">
            <Input
              className="subscribe-input"
              placeholder="Introdu adresa ta de email"
              onChange={(e) => {
                const value = e.target.value;
                subscribedEmail(value)
                console.log(value)
              }}
            />
            <button className="subscribe-button"
              onClick={() => alert(`${email} added successfully to newsletter`)}

            >Trimite</button>
          </div>
        </div>
        <div className="subscribe-details">
          <div className="subscribe-details-text">✅ Oferte valabile exclusiv pentru abonați</div>
          <div className="subscribe-details-text">🎉 Reminder pentru ziua de nume a celor dragi</div>
          <div className="subscribe-details-text">🌿 Sfaturi despre plante și flori, direct de la specialiști</div>
        </div>
      </div>
    </>
  );
}
