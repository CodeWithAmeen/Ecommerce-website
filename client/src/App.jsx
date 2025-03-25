import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MenswearCasual } from './pages/Menswear-casual';
import { MenswearFormal } from './pages/Menswear-formal';
import { MenswearSportswear } from './pages/Menswear-sportswear';
import { WomenswearCasual } from './pages/Womenswear-casual';
import { WomenswearFormal } from './pages/Womenswear-formal';
import { WomenswearActivewear } from './pages/Womenswear-activewear';
import { KidswearCasual } from './pages/Kidswear-casual';
import { KidswearFormal } from './pages/Kidswear-formal';
import { KidswearPlaywear } from './pages/Kidswear-playwear';
import { Sales } from './pages/Sales&offer';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import AddToCart  from './pages/addtocart';
import Navbar from './component/Navbar';
import { Footer } from './component/Footer';
import Loader from './component/Loader';
import Logout from './pages/Logout';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loader when the route changes
    setLoading(true);

    // Simulate a delay for loader to display (like an API call delay)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    // Cleanup the timeout if the component unmounts or the route changes
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mens-wear" element={<MenswearCasual />} />
            <Route path="/mens-casual" element={<MenswearCasual />} />
            <Route path="/mens-formal" element={<MenswearFormal />} />
            <Route path="/mens-sportswear" element={<MenswearSportswear />} />
            <Route path="/womens-wear" element={<WomenswearCasual />} />
            <Route path="/womens-casual" element={<WomenswearCasual />} />
            <Route path="/womens-formal" element={<WomenswearFormal />} />
            <Route path="/womens-activewear" element={<WomenswearActivewear />} />
            <Route path="/kids-wear" element={<KidswearCasual />} />
            <Route path="/kids-casual" element={<KidswearCasual />} />
            <Route path="/kids-formal" element={<KidswearFormal />} />
            <Route path="/kids-playwear" element={<KidswearPlaywear />} />
            <Route path="/sales-offers" element={<Sales />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/my-account" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
