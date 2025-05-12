import './Footer.css';
import { useState } from 'react';

export default function Footer({ instagramGray, instagramColor, facebookGray, facebookColor, youtubeGray, youtubeColor, pinterestGray, pinterestColor, }) {

  const [hovered, setHovered] = useState('');

  return (
    <footer>
      <div className="separator"></div>
      <div className="copyright">
        <p>
          Copyright © Flower Buddy. Toate drepturile rezervate.
          Reg. Com. J01/1289/2024, CIF: RO32145687
        </p>
      </div>
      <div className="contact">
        <div
          className="contact-youtube"
          onMouseEnter={() => setHovered('youtube')}
          onMouseLeave={() => setHovered('')}
        >
          <img
            src={hovered === 'youtube' ? youtubeColor : youtubeGray}
            alt="YouTube icon"
          />
        </div>
        <div
          className="contact-facebook"
          onMouseEnter={() => setHovered('facebook')}
          onMouseLeave={() => setHovered('')}
        >
          <img
            src={hovered === 'facebook' ? facebookColor : facebookGray}
            alt="Facebook icon"
          />
        </div>
        <div
          className="contact-instagram"
          onMouseEnter={() => setHovered('instagram')}
          onMouseLeave={() => setHovered('')}
        >
          <img
            src={hovered === 'instagram' ? instagramColor : instagramGray}
            alt="Instagram icon"
          />
        </div>
        <div
          className="contact-pinterest"
          onMouseEnter={() => setHovered('pinterest')}
          onMouseLeave={() => setHovered('')}
        >
          <img
            src={hovered === 'pinterest' ? pinterestColor : pinterestGray}
            alt="Pinterest icon"
          />
        </div>
      </div>
    </footer>
  );
}
