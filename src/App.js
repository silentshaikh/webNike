import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';
import About from './About/About';
import Contact from './Contact/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Error from './Error/Error';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
