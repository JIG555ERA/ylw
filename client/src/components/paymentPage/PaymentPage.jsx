import React, { useState } from "react";
import axios from "axios";
import Navbar from "../homePage/homePageComponents/topSection/navBar/navbar";
import ImageSection from "../../globalComponents/ImageSection";
import { useCart } from "../../globalComponents/CartContext";
import upiImg from "../../assets/paymentLogos/upiImg.svg";
import "./paymentPage.css";

const API_BASE = "https://admin.ylw.co.in/api/v1";

const PaymentPage = () => {
  const { cartItems } = useCart();
  const [loading, setLoading] = useState(false);

  /* ================= PRICE CALCULATIONS ================= */
  const deliveryCharge = cartItems.length ? 30 : 0;

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.bookPrice * item.quantity,
    0
  );

  const discountedPrice = cartItems.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  const payableAmount = discountedPrice + deliveryCharge;

  /* ================= API CALLS ================= */

  const createOrder = async () => {
    return axios.post(`${API_BASE}/orders/create`, {
      customer: {
        name: "API User",
        email: "api@user.com",
        phone: "9999999999",
        gender: "Male",
        date_of_birth: "1995-06-12",
      },
      address: [
        {
          line1: "Line 1",
          line2: "Line 2",
          city: "Mumbai",
          state: "MH",
          postal_code: "400001",
          country: "IN",
        },
      ],
      order: cartItems.map((item) => ({
        book_title: item.bookTitle,
        book_id: item.id,
        total_amount: item.discountedPrice * item.quantity,
        quantity: item.quantity,
      })),
    });
  };

  const handlePhonePePayment = async () => {
    if (!cartItems.length) {
      alert("Cart is empty");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Create order in YLW backend
      await createOrder();

      // 2️⃣ Initiate payment
      const orderNumber = `YLW-${Date.now()}`;

      const res = await axios.post(
        `${API_BASE}/payment/initiate`,
        {
          amount: payableAmount,
          order_number: orderNumber,
        }
      );

      // 3️⃣ Redirect to PhonePe
      window.location.href = res.data.redirectUrl;

    } catch (err) {
      console.error(err);
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="w-full h-screen bg-[#fafafa] font-[Poppins]">
      <Navbar />

      <div className="w-full h-full flex justify-between">

        {/* ================= LEFT SECTION ================= */}
        <div className="lg:w-[68vw] flex justify-center items-start overflow-y-scroll scrollbar-hide">
          <div className="lg:w-[660px] pt-[100px]">

            <h1 className="text-[#111729] text-[24px] font-semibold mt-[24px]">
              Payment Details
            </h1>

            <div className="w-full bg-white rounded-3xl p-[24px] mt-[24px]">

              <h2 className="text-[18px] font-semibold mb-6">
                Pay securely with PhonePe
              </h2>

              <div className="flex items-center gap-4 border-2 border-[#4B7DF3] rounded-2xl p-4">
                <img src={upiImg} alt="PhonePe" className="h-8" />
                <p className="text-[16px] font-medium">
                  UPI • Cards • Net Banking
                </p>
              </div>

              <button
                onClick={handlePhonePePayment}
                disabled={loading}
                className="w-full h-[50px] mt-8 rounded-2xl bg-[#4B7DF3] text-white font-semibold text-[16px]"
              >
                {loading
                  ? "Redirecting to PhonePe..."
                  : `Pay ₹${payableAmount}`}
              </button>

            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="lg:w-[30vw] bg-white p-[24px] flex flex-col">
          <h1 className="text-[20px] font-semibold pt-[100px]">
            Your Orders
          </h1>

          <div className="w-full h-[320px] overflow-y-scroll mt-4 scrollbar-2px">
            {cartItems.map((book) => (
              <div key={book.id} className="flex gap-4 mt-6">

                <div className="w-[80px]">
                  <ImageSection bookCoverPage={book.bookCoverPage} />
                </div>

                <div>
                  <h3 className="font-semibold text-[16px]">
                    {book.bookTitle}
                  </h3>

                  <p className="text-[#7C7C7C] text-[14px]">
                    {book.bookAuthor}
                  </p>

                  <p className="mt-2 text-[14px]">
                    Qty: {book.quantity} • ₹
                    {book.discountedPrice * book.quantity}
                  </p>

                  <p className="text-[12px] text-[#7C7C7C] line-through">
                    ₹{book.bookPrice * book.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUMMARY ================= */}
          <div className="mt-6 border-t pt-4 text-[15px]">

            <div className="flex justify-between">
              <span className="text-[#7C7C7C]">
                Item Total ({totalItems})
              </span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-[#7C7C7C]">Discount</span>
              <span className="text-[#009011]">
                - ₹{totalPrice - discountedPrice}
              </span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-[#7C7C7C]">Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <div className="flex justify-between font-semibold text-[18px] mt-4">
              <span>Total Amount</span>
              <span>₹{payableAmount}</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentPage;
