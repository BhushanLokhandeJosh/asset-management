import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./card.css";

import { cardImages } from "../../images/image";



function CardComponent() {
  return (
    <CardGroup>
      {cardImages.map((item:any) => (
        <div  key={item.IMAGENO} className="card-style">
          <Card>
            <Card.Img variant="top" className="card-style" src={item.URL}/>
          </Card>
        </div>
      ))}
      
    </CardGroup>
  );
}

export default CardComponent;
