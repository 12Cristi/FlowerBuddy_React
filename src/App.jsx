import "./App.css";
import Header from "./components/Header/Header";
import NavBarList from "./components/NavBarList/NavBarList";
import logo from "./assets/Logo.svg";
import searchLogo from "./assets/search.svg";
import loginLogo from "./assets/loginLogo.svg";
import cartLogo from "./assets/cart.svg";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<>
			<Header
				placeholder="🔍   Alege-ți localitatea pentru livrare"
				logo={logo}
				searchLogo={searchLogo}
				loginLogo={loginLogo}
				cartLogo={cartLogo}
			></Header>
			<NavBarList>
			</NavBarList>
			<ToastContainer />
		</>

	);
}

export default App;
