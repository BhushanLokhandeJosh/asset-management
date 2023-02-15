import Carousel from "react-bootstrap/Carousel";
import "../hero.css";

import image1 from "../../../../assets/image/front-page.png";

function CarouselComponent() {
  return (
    <div className="corousel-outer">
    <div className="corousel-inner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide</h3>
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