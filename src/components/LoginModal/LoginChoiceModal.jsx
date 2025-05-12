import './LoginModal.css';
import Button from '../../common/Button/Button';
import CloseButton from '../CloseButton/CloseButton';
import CodeChoiceModal from './CodeChoiceModal';
import { useState } from 'react';

const LoginChoiceModal = ({ googleLogo, facebookLogo, show, onHide, onEmailLogin }) => {
  const [showCodeChoiceLogin, setShowCodeChoiceLogin] = useState(false);

  if (!show && !showCodeChoiceLogin) return null;

  const handleBackToChoice = () => {
    setShowCodeChoiceLogin(false);
  };

  const handleHideAll = () => {
    setShowCodeChoiceLogin(false);
    onHide();
  };

  if (showCodeChoiceLogin) {
    return (
      <CodeChoiceModal
        show={true}
        onHide={handleBackToChoice}
        onBack={handleBackToChoice}
      />
    );
  }

  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <div className="modal-section">
          <div className="login-title">
            <div>Alege o opțiune de autentificare</div>
            <CloseButton onClick={handleHideAll} />
          </div>
        </div>

        <div className="modal-section-content">
          <div className='standard-login'>
            <Button
              onClick={onEmailLogin}
              buttonName={'Autentifică-te cu e-mail și parolă'}
            />
          </div>

          <div className='standard-login'>
            <Button
              onClick={() => setShowCodeChoiceLogin(true)}
              buttonName={'Primește codul de acces prin e-mail'}
            />
          </div>

          <div className='standard-login'>
            <Button
              onClick={() => window.location.href = 'https://accounts.google.com/'}
              className={'standard-login-btn'}
              icon={googleLogo}
              isIconVisible={true}
              buttonName={'Conectează-te cu Google'}
            />
          </div>

          <div className='standard-login'>
            <Button
              onClick={() => window.location.href = 'https://www.facebook.com/login'}
              className={'standard-login-btn'}
              icon={facebookLogo}
              isIconVisible={true}
              buttonName={'Conectează-te cu Facebook'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginChoiceModal;
