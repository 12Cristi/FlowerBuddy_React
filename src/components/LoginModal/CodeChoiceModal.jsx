import CloseButton from '../CloseButton/CloseButton';
import Button from '../../common/Button/Button';

const CodeChoiceModal = ({ show, onHide, onBack }) => {
  if (!show) return null;

  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <div className="modal-section">
          <div className="login-title">
            <div>Primește codul de acces prin e-mail</div>
            <CloseButton onClick={onHide} />
          </div>
        </div>

        <div className="email-inputs">
          <input type="text" placeholder="Ex: example@mail.com" />
        </div>

        <div className="user-login">
          <Button
            className={'back-button'}
            buttonName={'Înapoi'}
            onClick={onBack}
          />
          <Button
            className={'auth-button'}
            buttonName={'Trimite'}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeChoiceModal;
