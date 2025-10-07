import colors from './data/data';
import ColorBoxesContainer from './Components/ColorBoxesContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Interactive Color Grid</h1>
      <p>Click on any box to change its color!</p>
      <ColorBoxesContainer colors={colors} />
    </div>
  );
}

export default App;