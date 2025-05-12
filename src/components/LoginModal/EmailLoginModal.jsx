import { useState } from 'react';
import './LoginModal.css';
import Button from '../../common/Button/Button';
import CloseButton from '../CloseButton/CloseButton';


const EmailLoginModal = ({ show, onHide, onBack, setValidLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!show) return null;

  const handleLogin = () => {
    const validEmail = 'example@mail.com';
    const validPassword = 'password123';
    if (email === validEmail && password === validPassword) {
      setError('');
      // alert('Autentificare reusita')
      localStorage.setItem('loggedUser', validEmail);
      setValidLogin(true)
      onHide();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="email-auth custom-modal" show={show} onHide={onHide}>
        <div className="login-title">
          <div>Autentifica-te cu e-mail si parola</div>
          <CloseButton onClick={onHide} />
        </div>
        <div className="email-inputs">
          <input
            type="text"
            placeholder="Ex: example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Adauga-ti parola"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error-message">{error}</div>}
          <div className="forgot-password">Mi-am uitat parola</div>
        </div>
        <div className="separator"></div>
        <div className="user-login">
          <Button
            className="back-button"
            buttonName="Înapoi"
            onClick={onBack}
          />
          <Button
            className="auth-button"
            buttonName="Autentificare"
            onClick={handleLogin}
          />
        </div>
        <div className="register">Nu ai cont? Inregistreaza-te</div>
      </div>
    </>
  );
};

export default EmailLoginModal;