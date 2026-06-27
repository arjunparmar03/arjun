import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Centered coordinates (-0.5 to 0.5)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;

    // Degrees to rotate (max 10 degrees for elegant look)
    const rotateX = -(dy / yc) * 10;
    const rotateY = (dx / xc) * 10;

    setCoords({ x: rotateY, y: rotateX, mouseX: x, mouseY: y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0, mouseX: 0, mouseY: 0 });
  };

  const tiltStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.1s ease-out',
      }
    : {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.5s ease-out',
      };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden select-none cursor-pointer ${className}`}
    >
      {/* Glare effect overlay */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-3xl opacity-20 transition-opacity duration-300"
          style={{
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(124, 90, 237, 0.1) 60%, transparent 100%)',
            left: `${coords.mouseX - 125}px`,
            top: `${coords.mouseY - 125}px`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltCard;