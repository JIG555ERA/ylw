"use client";

import React, { useState, useRef } from "react";
import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MapPin,
  Tag,
  Gift,
  Sparkles,
  ArrowLeft,
  Check,
  ArrowRight,
  CreditCard,
  AlertCircle,
  Truck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../topSection/navBar/navbar";
import PhoneNavBar from "../topSection/navBar/PhoneNavBar";
import bookStoreLogo from '../../../../assets/logos/bookStoreLogo.svg'
import ShinyText from "../../../../globalComponents/shinyText/ShinyText";
import ImageSection from "../../../../globalComponents/ImageSection";
import { useCart } from "../../../../globalComponents/CartContext";
import empty_bag from '../../../../assets/backgroundImages/optimized_high_quality_bag.png'

/* -------------------------
   MOCK ORDER & COUPONS (kept for UI / shipping address / coupons)
   ------------------------- */
const mockOrder = {
  orderId: "BV-2024-001234",
  orderDate: "January 15, 2024",
  estimatedDelivery: "January 20-22, 2024",
  status: "confirmed",
  items: [
    {
      book: {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.5,
        reviewCount: 1250,
        category: "Fiction",
        language: "English",
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        isNew: true,
        isOnSale: true,
      },
      quantity: 1,
    },
    {
      book: {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        price: 16.99,
        rating: 4.8,
        reviewCount: 2340,
        category: "Self-Help",
        language: "English",
        image:
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
        isNew: false,
      },
      quantity: 2,
    },
  ],
  subtotal: 48.97,
  shipping: 5.99,
  tax: 4.4,
  total: 59.36,
  paymentMethod: "•••• •••• •••• 1234 (Visa)",
  shippingAddress: {
    name: "Sarah Johnson",
    address: "123 Library Street, Apt 4B",
    city: "Booktown",
    state: "Reading State",
    zipCode: "12345",
    phone: "+1 (555) 123-4567",
  },
};

const mockCoupons = [
  {
    id: "1",
    code: "TRYNEW",
    title: "TRYNEW",
    description: "Save big on this order!",
    discount: 60,
    discountType: "percentage",
    minimumOrder: 199,
    maxDiscount: 120,
    isActive: true,
    color: "from-vibrant-orange to-vibrant-red",
  },
  {
    id: "2",
    code: "APAYFEST",
    title: "APAYFEST",
    description: "Get upto ₹100 cashback using Amazon Pay Balance",
    discount: 100,
    discountType: "fixed",
    minimumOrder: 500,
    isActive: true,
    color: "from-vibrant-blue to-vibrant-indigo",
  },
  {
    id: "3",
    code: "WELCOME20",
    title: "WELCOME20",
    description: "Get 20% off on your first order",
    discount: 20,
    discountType: "percentage",
    minimumOrder: 100,
    maxDiscount: 200,
    isActive: true,
    color: "from-vibrant-green to-vibrant-emerald",
  },
];

/* -------------------------
   SwipeToPayButton (same experience as your original)
   ------------------------- */
function SwipeToPayButton({ total, onComplete }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleDragEnd = (e, info) => {
    const threshold = 0.8;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const dragDistance = info?.offset?.x ?? 0;
    const progress = Math.max(0, Math.min(1, dragDistance / Math.max(1, containerWidth - 60)));
    setIsDragging(false);

    if (progress >= threshold) {
      setIsCompleted(true);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    } else {
      setDragProgress(0);
    }
  };

  const handleDrag = (e, info) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const dragDistance = Math.max(0, info?.offset?.x ?? 0);
    const progress = Math.max(0, Math.min(1, dragDistance / Math.max(1, containerWidth - 60)));
    setDragProgress(progress);
    setIsDragging(true);
  };

  return (
    <div className="">
      <div>
        <div ref={containerRef} className="relative h-14 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 rounded-xl overflow-hidden shadow">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isCompleted ? 1 : dragProgress }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: isCompleted ? 0.25 : 0 }}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ opacity: isDragging ? 0.8 : 1, scale: isDragging ? 0.98 : 1 }}
              transition={{ duration: 0.15 }}
              className="text-white font-medium"
            >
              {isCompleted ? (
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Payment Processing...
                </div>
              ) : (
                <>
                  <div className="text-sm">Swipe to Pay</div>
                  <div className="text-xs opacity-90"><span className="font-[Roboto]">₹</span>{Number(total || 0).toFixed(2)}</div>
                </>
              )}
            </motion.div>
          </div>

          {!isCompleted && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: containerRef.current ? containerRef.current.offsetWidth - 56 : 0 }}
              dragElastic={0.12}
              onDragStart={() => setIsDragging(true)}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              className="absolute left-2 top-2 bottom-2 w-12 bg-white rounded-lg shadow flex items-center justify-center cursor-grab"
              whileDrag={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <ArrowRight className={`h-5 w-5 ${isDragging ? "text-sky-600" : "text-gray-600"}`} />
            </motion.div>
          )}

          {isCompleted && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
                <Check className="h-5 w-5 text-green-600" />
              </div>
            </motion.div>
          )}

          {!isCompleted && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            />
          )}
        </div>

        <div className="text-center text-xs text-gray-500 mt-2">
          {isCompleted ? "Redirecting..." : "Drag the button to complete payment — secure checkout"}
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   CouponSection overlay (keeps original UI + uses cart total)
   ------------------------- */
function CouponSection({ open, onClose, coupons = [], cartTotal = 0, onSelectCoupon, appliedCoupon }) {
  if (!open) return null;

  const eligible = coupons.filter((c) => cartTotal >= c.minimumOrder);
  const ineligible = coupons.filter((c) => cartTotal < c.minimumOrder);

  const formatDiscount = (c) => (c.discountType === "percentage" ? `${c.discount}% OFF` : `₹${c.discount} OFF`);
  const getDiscountAmt = (c) => {
    if (c.discountType === "percentage") {
      const disc = (cartTotal * c.discount) / 100;
      return c.maxDiscount ? Math.min(disc, c.maxDiscount) : disc;
    }
    return c.discount;
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative ml-auto w-full max-w-lg bg-white dark:bg-gray-900 p-6 overflow-y-auto"
      >
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h3 className="text-lg font-semibold">Apply Coupon</h3>
            <p className="text-sm text-gray-600">Cart total: <span className="font-[Roboto]">₹</span>{Number(cartTotal || 0).toFixed(2)}</p>
          </div>
        </div>

        {eligible.length > 0 && (
          <>
            <h4 className="text-sm font-semibold mb-3">Best for you</h4>
            <div className="space-y-3 mb-6">
              {eligible.slice(0, 1).map((c) => (
                <div key={c.id} className="relative rounded-xl border p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold">{c.title}</div>
                      <div className="text-sm text-green-600">{c.description}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Use code <span className="font-medium">{c.code}</span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => onSelectCoupon(c)}
                        disabled={appliedCoupon?.id === c.id}
                        className={`px-4 py-2 rounded text-sm font-medium ${appliedCoupon?.id === c.id ? "bg-green-500 text-white" : "bg-orange-500 text-white"}`}
                      >
                        {appliedCoupon?.id === c.id ? (
                          <span className="flex items-center gap-2"><Check className="h-4 w-4" />APPLIED</span>
                        ) : (
                          "APPLY"
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {formatDiscount(c)} • Min order ₹{c.minimumOrder.toFixed(2)} • Est. saving ₹{getDiscountAmt(c).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {ineligible.length > 0 && (
          <>
            <h4 className="text-sm font-semibold mb-3">More coupons (locked)</h4>
            <div className="space-y-3">
              {ineligible.map((c) => (
                <div key={c.id} className="rounded-xl border p-4 bg-gray-50 opacity-70">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-600">{c.title}</div>
                      <div className="text-xs text-gray-500">{c.description}</div>
                    </div>
                    <div>
                      <button disabled className="px-3 py-1 rounded bg-gray-200 text-gray-600 cursor-not-allowed">APPLY</button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Min order ₹{c.minimumOrder.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

/* -------------------------
   MAIN PAGE
   ------------------------- */
export default function Cart({ open, onClose }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // subtotal
  const subtotal = (cartItems || []).reduce((s, it) => {
    const price = Number(it?.bookPrice ?? it?.price ?? 0);
    const qty = Number(it?.quantity ?? 0);
    return s + price * qty;
  }, 0);

  const deliveryCharges = subtotal > 500 ? 0 : 30;
  const discount = appliedCoupon ? 50 : 0; // keep your coupon logic
  const total = Math.max(0, subtotal - discount + deliveryCharges);

  const handleCheckout = () => {
    alert("Proceed to checkout — total: ₹" + Number(total || 0).toFixed(2));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full max-w-4xl bg-gradient-to-br from-blue-100 via-white to-purple-100 z-90 shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b">
              {/* <Navbar active="cart" /> */}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-all  ease-in-out"
              >
                <X className="h-5 w-5 text-gray-700 font-semibold" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden p-6 ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left - items */}
                <div className="md:col-span-2 space-y-6">
                  <header className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-pink-500 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold">Your Cart</h1>
                      <p className="text-sm text-gray-600 ">
                        {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </header>

                  <div className="space-y-4">
                    {cartItems.length === 0 && (
                      <div className="p-8 text-center flex justify-center items-center flex-col rounded-lg md:translate-x-[25%]">
                        {/* <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" /> */}
                        <img src={empty_bag} alt="" className="" />
                        <p className="mt-4 text-gray-600">
                          Your cart is empty — start adding books!
                        </p>
                        <a href="/" className="group w-full max-w-[220px] mt-6">
                          <div
                            className="group w-[130px] group-hover:w-[170px] xl:h-[52px] md:h-[48px] h-[36px] 
                              border border-blue-500 font-semibold flex justify-center items-center 
                              rounded-[30px]  md:text-[18px] text-[14px] cursor-pointer 
                              transition-all duration-1000 ease-in-out mx-auto 
                              bg-white relative overflow-hidden md:mt-[0px] mt-[12px] hover:shadow-md hover:shadow-gray-400 hover:scale-105"
                          >
                            <span
                              className="bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                                bg-clip-text text-transparent transition-all duration-1000 ease-in-out 
                                group-hover:text-white group-hover:bg-none"
                            >
                              Add Items
                            </span>
                            <div
                              className="absolute inset-0 rounded-[30px] 
                                bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                                opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
                            />
                          </div>
                        </a>
                      </div>
                    )}

                    {cartItems.map((item) => {
                      const price = Number(item?.bookPrice ?? item?.price ?? 0);
                      const qty = Number(item?.quantity ?? 0);

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-4 p-4 bg-white/60 w-[90%] rounded-2xl shadow-md hover:shadow-lg hover:scale-102 shadow-gray-300"
                        >
                          <div className="flex w-full ">
                            <div className="w-[90px] h-[120px] mr-4">
                              <ImageSection bookCoverPage={item.bookCoverPage} />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h3 className="font-semibold text-lg line-clamp-2">
                                  {item.bookTitle}
                                </h3>
                                <p className="text-sm text-gray-600  line-clamp-1">
                                  {item.bookAuthor}
                                </p>
                              </div>
                              <div className="flex justify-evenly items-center text-[20px] font-semibold rounded-xl gap-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 w-[100px] h-[32px]">
                                <button
                                  onClick={() => updateQuantity(item.id, qty - 1)}
                                  className="p-1  text-white rounded"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="text-white">{qty}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, qty + 1)}
                                  disabled={qty >= 3}
                                  className="p-1 text-white rounded"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                              <span className="font-semibold"><span className="font-[Roboto]">₹</span>{price}</span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:bg-red-100 h-6 w-6 rounded-md flex justify-center items-center cursor-pointer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>


                <div className="mt-18">
                  
                  {/* Right - summary */}
                  {cartItems.length !== 0 && (
                    <aside className=" space-y-4">
                      <div className="bg-white p-6 rounded-2xl shadow-md text-black/80">
                        <h3 className="font-semibold text-[18px] mb-4 flex items-center gap-2">
                          {/* <MapPin className="h-5 w-5 text-orange-500" />  */}
                          Shipping and Contact Details
                        </h3>
                        <p className="font-medium">{mockOrder.shippingAddress.name}</p>
                          
                        <div
                        className="flex text-[16px] text-[#7C7C7C]">
                          {mockOrder.shippingAddress.address}

                          {mockOrder.shippingAddress.city},{" "}
                          {mockOrder.shippingAddress.state} {mockOrder.shippingAddress.zipCode}
                        </div>
                        <p className="text-[16px] mt-1 ">{`+91 80973 15130`}</p>
                        <div className="mt-4 p-3 bg-gradient-to-r from-white via-green-50 to-green-100 rounded-xl flex items-center gap-2">
                          <Truck className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-600">
                            Estimated Delivery: {mockOrder.estimatedDelivery}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-md text-black/80">
                        <h3 className="text-[18px] font-semibold mb-6 flex items-center gap-2">Order Summary</h3>
                        <div className="flex justify-between text-[14px]">
                          <span className="text-[#7C7C7C]">Item Total</span>
                          <span className="text-[18px] font-semibold"><span className="font-[Roboto]">₹</span>{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[14px]">
                          <span className="text-[#7C7C7C] ">Discount</span>
                          <span className="text-green-400 text-[18px] font-semibold">- <span className="font-[Roboto]">₹</span>{discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[14px]">
                          <span className="text-[#7C7C7C]">Delivery Charges</span>
                          <span className="text-[18px] font-semibold"><span className="font-[Roboto]">₹</span>{deliveryCharges}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-medium text-black/80 text-lg ">
                          <span className=" text-[14px]">Total Amount</span>
                          <span  className="text-[18px] font-semibold"><span className="font-[Roboto]">₹</span>{total.toFixed(2)}</span>
                        </div>

                        <div className="mt-4">
                          <SwipeToPayButton total={total} onComplete={handleCheckout} />
                        </div>
                      </div>
                    </aside>
                  )}
                </div>

              </div>
            </div>

            <PhoneNavBar />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}