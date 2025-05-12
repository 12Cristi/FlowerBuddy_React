import './Button.css';

const Button = ({ className, buttonName, onClick, icon, isIconVisible }) => {
  return (
    <button className="custom-button auth" onClick={onClick}>
      <div className='button-content'>
        <div className={className}>
          <span>{buttonName}</span>
          {isIconVisible && icon && <img src={icon} alt="auth-icon" />}
        </div>
      </div>


    </button>
  );
};

export default Button;
