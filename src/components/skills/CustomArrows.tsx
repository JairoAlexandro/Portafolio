import React, { CSSProperties } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  const [showArrows, setShowArrows] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return showArrows ? (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "40px", 
        height: "40px", 
        background: "rgba(0, 0, 0, 0.5)", 
        borderRadius: "50%", 
        cursor: "pointer",
        color: "white"
      }}
      onClick={onClick}
    >
      &#9664;
    </div>
  ) : null;
};

const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  const [showArrows, setShowArrows] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return showArrows ? (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "40px", 
        height: "40px", 
        background: "rgba(0, 0, 0, 0.5)", 
        borderRadius: "50%", 
        cursor: "pointer",
        color: "white"
      }}
      onClick={onClick}
    >
      &#9654;
    </div>
  ) : null;
};

export { CustomPrevArrow, CustomNextArrow };
