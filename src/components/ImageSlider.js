import React, { useState } from "react";
import "../css/ImageSlider.css"; // 스타일 파일을 별도로 생성하여 사용

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage} className="slider-button prev">
        &#10094;
      </button>
      <div className="slider-content">
        <img
          src={images[currentImageIndex]}
          alt={`슬라이드 ${currentImageIndex + 1}`}
          className="slider-image"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg"; // 대체 이미지
          }}
        />
      </div>
      <button onClick={nextImage} className="slider-button next">
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
