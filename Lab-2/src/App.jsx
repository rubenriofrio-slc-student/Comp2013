import './App.css'
import ResortLiteTitle from './Components/ResortLiteTitle'
import Card from './Components/Card'

function App() {
  return (
    <>
      <ResortLiteTitle />
      <div className="main-container">
        <section className="cards">
          <Card image="src/assets/images/1.jpg" title="Indonesia" description="Gili Air Hotel" rate="4.8" price="$589/night" />
          <Card image="src\assets\images\2.jpg" title="SeyChelles" description="Hilton Resort" rate="4.2" price="$629/night" />
          <Card image="src\assets\images\3.jpg" title="US Virgin Islands" description="Goa Resort" rate="3.5" price="$485/night" />
          <Card image="src\assets\images\4.jpg" title="Bahamas" description="Kuredu Resort" rate="4.1" price="$729/night" />
          <Card image="src\assets\images\5.jpg" title="Mauritius" description="Trou D'eau Douce" rate="4.9" price="$877/night" />
          <Card image="src\assets\images\6.jpg" title="Bermuda" description="Staniel Cay Hotel" rate="3.2" price="$365/night" />
        </section>
      </div>
    </>
  )
}

export default App
