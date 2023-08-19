import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import p7 from "../assets/p7.jpg";
const TestimonialCarousel = () => {
  return (
    <div className="position-relative">
      <div className="position-relative testimonial-border-container">
        <div className="testimonials-carousel-container ">
          <Carousel className="tcarousel-indicators">
            <Carousel.Item>
              <CarouselImage text="First slide" imageUrl={p7} />
              <Carousel.Caption>
                <p
                  className="text-justify"
                  style={{
                    fontWeight: "400",
                    marginBottom: "6.1rem",
                  }}
                >
                  We have used your Business Name LLC for several years and
                  conside Tim and his men as part of our company.We have used
                  your Business Name LLC for several years and conside Tim and
                  his men as part of our company.
                </p>
                <h3
                  style={{
                    fontWeight: "400",
                    textAlign: "right",
                    fontSize: "1rem",
                  }}
                >
                  - John F. Kennedy
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage text="First slide" imageUrl={p7} />
              <Carousel.Caption>
                <p
                  className="text-justify"
                  style={{ fontWeight: "400", marginBottom: "6.1rem" }}
                >
                  We have used your Business Name LLC for several years and
                  conside Tim and his men as part of our company.We have used
                  your Business Name LLC for several years and conside Tim and
                  his men as part of our company.
                </p>
                <h3
                  style={{
                    fontWeight: "400",
                    textAlign: "right",
                    fontSize: "1rem",
                  }}
                >
                  - John F. Kennedy
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage text="First slide" imageUrl={p7} />
              <Carousel.Caption>
                <p
                  className="text-justify"
                  style={{ fontWeight: "400", marginBottom: "6.1rem" }}
                >
                  We have used your Business Name LLC for several years and
                  conside Tim and his men as part of our company.We have used
                  your Business Name LLC for several years and conside Tim and
                  his men as part of our company.
                </p>
                <h3
                  style={{
                    fontWeight: "400",
                    textAlign: "right",
                    fontSize: "1rem",
                  }}
                >
                  - John F. Kennedy
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
