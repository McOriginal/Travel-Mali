import './App.css';
import AboutUs from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import LastTravel from './components/LastTravel';
import NextTravel from './components/NexTravel';

function App() {
  return (
    <>
    <Header />
    <NextTravel />
    <LastTravel />
    <AboutUs />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
