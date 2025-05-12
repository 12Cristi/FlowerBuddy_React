import './CloseButton.css'

const CloseButton = ({ onClick }) => {
  return (
    <span className="close-btn" onClick={onClick}>&times;</span>
  );
}

export default CloseButton;