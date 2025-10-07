import ColorBox from './ColorBox';

const ColorBoxesContainer = ({ colors }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 50px)',
      gap: '0',
      width: 'fit-content'
    }}>
      {colors.slice(0, 25).map((color, index) => (
        <ColorBox key={index} singleColor={color} colors={colors} />
      ))}
    </div>
  );
};

export default ColorBoxesContainer;