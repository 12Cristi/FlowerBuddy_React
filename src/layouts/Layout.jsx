import Header from '../common/Header/Header'
import { Outlet } from 'react-router';
import NavBarList from '../components/NavBarList/NavBarList';
import logo from "../assets/Logo.svg";
import searchLogo from "../assets/search.svg";
import loginLogo from "../assets/person-circle.svg";
import cartLogo from "../assets/basket.svg";
import Footer from '../components/Footer/Footer';
import instagramGray from '../assets/instagram.svg'
import facebookGray from '../assets/facebook.svg'
import youtubeGray from '../assets/youtube.svg'
import pinterestGray from '../assets/pinterest.svg'
import instagramColor from '../assets/footer-colored/insta.svg'
import facebookColor from '../assets/footer-colored/facebook-logo.svg'
import youtubeColor from '../assets/footer-colored/ytube.svg'
import pinterestColor from '../assets/footer-colored/pin.svg'

export default function Layout() {
  return (
    <>
      <Header
        placeholder="🔍   Alege-ți localitatea pentru livrare"
        logo={logo}
        searchLogo={searchLogo}
        loginLogo={loginLogo}
        cartLogo={cartLogo}
      />
      <NavBarList />
      <Outlet />
      <Footer
        instagramGray={instagramGray}
        instagramColor={instagramColor}
        facebookGray={facebookGray}
        facebookColor={facebookColor}
        youtubeGray={youtubeGray}
        youtubeColor={youtubeColor}
        pinterestGray={pinterestGray}
        pinterestColor={pinterestColor}
      />
    </>
  );
}
