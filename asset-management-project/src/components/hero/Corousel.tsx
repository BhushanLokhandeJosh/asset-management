import Carousel from "react-bootstrap/Carousel";
import "./card.css";

import { corouselImages } from "../../images/image";

function CarouselComponent() {
  return (
    <div className="corousel-outer">
    <div className="corousel-inner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={corouselImages.firstImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={corouselImages.secondImage}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={corouselImages.thirdImage}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default CarouselComponent;

/* <Carousel fade>
    {corouselImages.map((item) => (
      <div key={item.id} className="corousel-style" >
        <Carousel.Item>
          <img className="d-block w-100" src={item.URL} alt="slide" />
        </Carousel.Item>
      </div>

    ))}
    
     </Carousel> */
