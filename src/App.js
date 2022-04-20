import logo from './logo.svg';
import './App.css';
import NavBar from './components/Header';
import CarouselSlider from './components/Carousel';
import ProductCards from './components/Products';

function App() {
  return (
    <>
      <NavBar />
      <CarouselSlider />
      <ProductCards />
    </>
  );
}

export default App;
