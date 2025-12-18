import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./globalComponents/CartContext";

import Navbar from "./components/homePage/homePageComponents/topSection/navBar/navbar";  // <-- YOUR NAVBAR
import LoaderGIF from "./globalComponents/loaderGIF";

// Lazy-loaded pages
const HomePage = lazy(() => import("./components/homePage/homePageComponents/HomePage"));
const CategoryPage = lazy(() => import("./components/homePage/homePageComponents/CategoryPage/CategoryPage"));
const LikePage = lazy(() => import("./components/homePage/homePageComponents/likePage/LikePage"));
const Cart = lazy(() => import("./components/homePage/homePageComponents/cartPage/NewCartPage"));
const ProductPage = lazy(() => import("./components/homePage/homePageComponents/productPage/ProductPage"));
const Publications = lazy(() => import("./components/publications/Publications"));
const Payment = lazy(() => import("./components/paymentPage/PaymentPage"))

const SignUp = lazy(() => import("./globalComponents/auth/SignUP"));
const AuthLogIN = lazy(() => import("./globalComponents/auth/AuthLogIN"));
const FeedBackPage = lazy(() => import("./components/feedbackPage/FeedBackPage"))

const OrderConfirmation = lazy(() => import("./components/orderConfirmation/OrderConfirmation"));

const TermsAndConditions = lazy(() => import("./components/legalities/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./components/legalities/PrivacyPolicy"));
const RefundAndCancellationPolicy = lazy(() =>
  import("./components/legalities/RefundAndCancellationPolicy")
);
const ReturnPolicy = lazy(() => import("./components/legalities/ReturnPolicy"));
const ShippingPolicy = lazy(() => import("./components/legalities/ShippingPolicy"));
const RefundPolicy = lazy(() => import("./components/legalities/RefundPolicy"));

const NotFound02 = lazy(() => import("./globalComponents/notFound/NotFound02"));
const TechnicalError = lazy(() => import("./globalComponents/notFound/TechnicalError"));

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <CartProvider>
      {/* ⭐ Navbar ALWAYS visible */}
      <Navbar />

      {/* ⭐ Only route components lazy load */}
      <Suspense fallback={<LoaderGIF />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/liked" element={<LikePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/feedback" element={<FeedBackPage />} />

          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<AuthLogIN />} />

          <Route path="/order" element={<OrderConfirmation />} />

          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route
            path="/refundAndCancellationPolicy"
            element={<RefundAndCancellationPolicy />}
          />
          <Route path="/returnPolicy" element={<ReturnPolicy />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
          <Route path="/refundPolicy" element={<RefundPolicy />} />

          <Route path="/*" element={<NotFound02 />} />
          <Route path="/tech-error" element={<TechnicalError />} />
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;
