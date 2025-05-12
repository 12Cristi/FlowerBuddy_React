import './Input.css';

const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      className="header-input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
