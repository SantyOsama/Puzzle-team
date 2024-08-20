import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
export default function MusicSection({ topic, images }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <h3 style={{ justifyContent: "center ", display: "flex" }}>{topic}</h3>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <div className="img-container">
              <img src={image} alt={topic} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
