import Button from "../Button/Button";
import Card from 'react-bootstrap/Card';
import './Cards.css'

export default function Cards({ image, cardTitle, cardPrice, cardDescription, onClick }) {
  return (
    <>
      <Card className="unique-card">
        <Card.Img variant="top" src={image} onClick={onClick} />
        <Card.Body>
          <Card.Title className="uniques-title">{cardTitle}</Card.Title>
          <Card.Text className="uniques-text">
            {cardDescription}
          </Card.Text>
          <Card.Text className="uniques-price">
            {cardPrice}
          </Card.Text>
          <Button
            // 
            buttonName={'Comanda acum'}
          />
        </Card.Body>
      </Card>
    </>
  )
}