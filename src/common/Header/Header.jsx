import "./Header.css";
import Input from "../../common/Input/Input";
import { useState, useEffect } from 'react';
import LoginChoiceModal from "../../components/LoginModal/LoginChoiceModal";
import EmailLoginModal from "../../components/LoginModal/EmailLoginModal";
import googleLogo from '../../assets/google_icon.svg';
import facebookLogo from '../../assets/facebook_icon_blue.svg';
import { useNavigate } from "react-router";

const Header = ({ logo, searchLogo, loginLogo, cartLogo }) => {
	const [showLoginChoice, setShowLoginChoice] = useState(false);
	const [showEmailLogin, setShowEmailLogin] = useState(false);
	const [query, setQuery] = useState('');
	const [userCity, setUserCity] = useState(null);
	const [validLogin, setValidLogin] = useState(false)

	const handleBackToChoice = () => {
		setShowEmailLogin(false);
		setShowLoginChoice(true);
	};

	const handleCitySelect = (cityName) => {
		setQuery(cityName);
		setUserCity(null);
		localStorage.setItem('selectedCity', cityName);
	};

	let navigate = useNavigate();

	useEffect(() => {
		const savedCity = localStorage.getItem('selectedCity');
		if (savedCity) {
			setQuery(savedCity);
		}
	}, []);

	useEffect(() => {
		if (!query) return;

		const selectedCity = localStorage.getItem('selectedCity');
		if (query === selectedCity) {
			setUserCity(null);
			return;
		}


		const timeoutId = setTimeout(() => {
			fetch(`https://api.api-ninjas.com/v1/city?name=${query}`, {
				headers: {
					'X-Api-Key': 'DkUJB6XRUt34Xn3KxRlo1w==Xf3l9QJYelAUIqBl',
				},
			})
				.then(response => response.json())
				.then(data => {
					if (data.length === 0) {
						setUserCity(null);
					} else {
						setUserCity(data[0]);
					}
				});
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [query]);

	return (
		<>
			<header className="app-header">
				<div className="header-title">
					<div className="header-left-area">
						<Input
							placeholder="Alege-ti localitatea pentru livrare"
							onChange={(e) => {
								setQuery(e.target.value)
							}}
							value={query}
						/>
						{userCity && (
							<div className="city-result-list">
								<div
									className="city-result-item"
									onClick={() => {
										handleCitySelect(userCity.name)
									}}
								>
									{userCity.name}, {userCity.country}
								</div>
							</div>
						)}
					</div>
				</div>

				<img className="logo" src={logo} alt="flowerBuddy-picture" onClick={() => navigate("/")} />

				<div className="header-right-area">
					<div className="header-right-area-buttons">
						<div className="action-section">
							<img src={searchLogo} alt="search-image" />
							<p>Caută</p>
						</div>

						<div
							className="action-section login-dialog"
							style={{ cursor: "pointer" }}
							onClick={() => setShowLoginChoice(true)}
						>
							<img src={loginLogo} alt="login-image" />
							<p className={validLogin ? "login-custom flex-row" : "login-custom"}>
								{validLogin ? `Welcome, ${localStorage.getItem('loggedUser')}` : "Login"}
							</p>
						</div>

						<div className="action-section">
							<img src={cartLogo} alt="cart-image" />
							<p>Coș</p>
						</div>
					</div>
				</div>
			</header>

			<LoginChoiceModal
				show={showLoginChoice}
				onHide={() => setShowLoginChoice(false)}
				onEmailLogin={() => {
					setShowLoginChoice(false);
					setShowEmailLogin(true);
				}}
				googleLogo={googleLogo}
				facebookLogo={facebookLogo}
			/>

			<EmailLoginModal
				show={showEmailLogin}
				onHide={() => setShowEmailLogin(false)}
				onBack={handleBackToChoice}
				setValidLogin={setValidLogin}
			/>
		</>
	);
};

export default Header;
