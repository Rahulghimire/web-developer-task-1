import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import image1 from "../assets/PLUMBING.jpg";

function TCarousel() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <Carousel>
        <Carousel.Item>
          <CarouselImage text="First slide" imageUrl={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Second slide" imageUrl={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Third slide" imageUrl={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Fourth slide" imageUrl={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Fifth slide" imageUrl={image1} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TCarousel;
