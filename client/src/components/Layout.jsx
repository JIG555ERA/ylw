// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // From react-router-dom
import { Navbar } from './homePage/homePageComponents/topSection/navBar/navbar'; // Adjust path as needed
import CartDrawer from './homePage/homePageComponents/cartPage/NewCartPage'; // Assuming NewCartPage is your drawer

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <>
      {/* The Navbar will be visible on all routes nested under this Layout */}
      <Navbar onCartClick={handleOpenCart} />

      {/* Outlet renders the current route's component */}
      <main>
        <Outlet />
      </main>

      {/* The CartDrawer will also be present on all routes nested under this Layout */}
      <CartDrawer open={isCartOpen} onClose={handleCloseCart} />
    </>
  );
};

export default Layout;