
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom";
import Contact from './pages/Contact'
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';
// export const scrollToTop = () => {
//   window.scrollTo(0, 0);
// }

function App() {
  return (
   <>
   <Header/>
<ScrollToTop/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  <Footer/>
   </>
  );
}

export default App;
