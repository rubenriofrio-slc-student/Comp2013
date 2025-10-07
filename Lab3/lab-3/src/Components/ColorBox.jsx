import { useState } from 'react';

const ColorBox = ({ singleColor, colors }) => {
  const [currentColor, changeColor] = useState(singleColor);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const clickHandler = () => {
    changeColor(getRandomColor());
  };

  return (
    <div
      onClick={clickHandler}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: currentColor,
        cursor: 'pointer'
      }}
    />
  );
};

export default ColorBox;