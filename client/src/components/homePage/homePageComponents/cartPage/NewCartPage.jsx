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
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../topSection/navBar/navbar";

/* -------------------------
   MOCK DATA
   ------------------------- */
const mockCartItems = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 12.99,
    originalPrice: 19.99,
    quantity: 1,
    image: "https://via.placeholder.com/120x160.png?text=Atomic+Habits",
    category: "Self-help",
    language: "EN",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 29.99,
    originalPrice: 39.99,
    quantity: 2,
    image: "https://via.placeholder.com/120x160.png?text=Pragmatic+Programmer",
    category: "Programming",
    language: "EN",
  },
  {
    id: 3,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    price: 8.5,
    originalPrice: null,
    quantity: 1,
    image: "https://via.placeholder.com/120x160.png?text=Norwegian+Wood",
    category: "Fiction",
    language: "JP (EN)",
  },
];

const mockCoupons = [
  {
    id: "1",
    code: "TRYNEW",
    title: "TRYNEW",
    description: "Save $12 on this order!",
    discount: 60,
    discountType: "percentage",
    minimumOrder: 19.99,
    maxDiscount: 12,
    isActive: true,
    color: "from-vibrant-orange to-vibrant-red",
  },
  {
    id: "2",
    code: "APAYFEST",
    title: "APAYFEST",
    description: "Get upto $10 cashback using Amazon Pay Balance",
    discount: 10,
    discountType: "fixed",
    minimumOrder: 50,
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
    minimumOrder: 10,
    maxDiscount: 5,
    isActive: true,
    color: "from-vibrant-green to-vibrant-emerald",
  },
];

/* -------------------------
   HELPER: SwipeToPayButton (inline)
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
                  <div className="text-xs opacity-90"><span className="font-[Roboto]">₹</span>{total.toFixed(2)}</div>
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

        <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mt-1">
          <CreditCard className="h-4 w-4" />
          <span>256-bit SSL secured</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   INLINE CouponSection overlay (complete)
   ------------------------- */
function CouponSection({ open, onClose, coupons = [], cartTotal = 0, onSelectCoupon, appliedCoupon }) {
  if (!open) return null;

  const eligible = coupons.filter((c) => cartTotal >= c.minimumOrder);
  const ineligible = coupons.filter((c) => cartTotal < c.minimumOrder);

  const formatDiscount = (c) => (c.discountType === "percentage" ? `${c.discount}% OFF` : `$${c.discount} OFF`);
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
            <p className="text-sm text-gray-600">Cart total: <span className="font-[Roboto]">₹</span>{cartTotal.toFixed(2)}</p>
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
export default function Cart() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // quantity
  const updateQuantity = (id, qty) => {
    setCartItems((prev) => prev.map((it) => (it.id === id ? { ...it, quantity: Math.max(1, qty) } : it)));
  };

  // remove
  const removeItem = (id) => setCartItems((prev) => prev.filter((it) => it.id !== id));

  // safe subtotal
  const subtotal = (cartItems || []).reduce((s, it) => s + it.price * it.quantity, 0);
  const deliveryCharges = subtotal > 25 ? 0 : 3;

  const calculateDiscount = (coupon) => {
    if (!coupon) return 0;
    if (coupon.discountType === "percentage") {
      const disc = (subtotal * coupon.discount) / 100;
      return coupon.maxDiscount ? Math.min(disc, coupon.maxDiscount) : disc;
    } else {
      return coupon.discount;
    }
  };

  const discount = calculateDiscount(appliedCoupon);
  const total = Math.max(0, subtotal - discount + deliveryCharges);

  const handleApplyCoupon = () => {
    const found = mockCoupons.find((c) => c.code.toLowerCase() === couponCode.trim().toLowerCase());
    if (found && found.isActive && subtotal >= found.minimumOrder) {
      setAppliedCoupon(found);
      setCouponCode("");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    } else {
      // tiny inline feedback (kept simple for this patch)
      alert("Coupon invalid or minimum not reached.");
    }
  };

  const handleCouponSelect = (coupon) => {
    if (subtotal >= coupon.minimumOrder) {
      setAppliedCoupon(coupon);
      setShowCoupons(false);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    }
  };

  const handleRemoveCoupon = () => setAppliedCoupon(null);

  const handleCheckout = () => {
    alert("Proceed to checkout — total: $" + total.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:bg-gray-900 text-gray-900 dark:text-white font-[Poppins]">
      {/* NAVBAR: placed inside a shared container so it lines up with page content */}
      <div className="max-w-6xl mx-auto p-6">
        <Navbar active="cart" />
      </div>

      <div className="max-w-6xl mx-auto p-6 py-[100px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left - items */}
        <div className="md:col-span-2 space-y-6">
          <header className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-pink-500 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Your Cart</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cartItems.length} {cartItems.length === 1 ? "item" : "items"}</p>
            </div>
          </header>

          {/* Items list */}
          <div className="space-y-4">
            {cartItems.length === 0 && (
              <div className="p-8 text-center border rounded-lg">
                <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">Your cart is empty — start adding books!</p>
              </div>
            )}

            {cartItems.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-md shadow-gray-200 hover:scale-102 hover:shadow-gray-300 hover:shadow-lg">
                <img src={item.image} alt={item.title} className="w-24 h-32 object-cover rounded-lg shadow-sm" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.author}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-0.5 text-xs bg-orange-100 text-orange-800 rounded-full">{item.category}</span>
                        <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">{item.language}</span>
                        <span className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">Paperback</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold">₹{item.price.toFixed(2)}</div>
                      {item.originalPrice && <div className="text-xs text-gray-500 line-through"><span className="font-[Roboto]">₹</span>{item.originalPrice.toFixed(2)}</div>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 flex items-center justify-center cursor-pointer">
                        <Minus className="h-5 w-5 text-white" />
                      </button>
                      <div className="w-10 text-center bg-gradient-to-br from-blue-300 via-blue-500 to-purple-500 bg-clip-text text-transparent text-[24px] font-normal">{item.quantity}</div>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 flex items-center justify-center cursor-pointer">
                        <Plus className="h-5 w-5 text-white" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button onClick={() => removeItem(item.id)} className="text-red-500 p-2 rounded hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shipping address */}
          <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-2xl shadow-gray-300 shadow-md">
            <h4 className="font-semibold flex items-center gap-2"><MapPin className="h-4 w-4" /> Delivery Address</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Flat no 3, Shreyas, 1st floor, 180 Madam Cama Road, Nariman Point, Mumbai, Maharashtra 400020</p>
            <p className="text-sm text-orange-600 mt-2">Estimate delivery: 2-3 hours</p>
          </div>
        </div>

        {/* Right - summary */}
        <aside className="sticky top-20 space-y-4 mt-[75px]">
          <div className="bg-white/90 dark:bg-gray-800/80 p-4 rounded-2xl shadow-md shadow-gray-300">
            {/* Coupon input */}
            <div className="flex gap-2 mb-3">
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 px-3 py-2 rounded-lg border"
              />
              <button onClick={handleApplyCoupon} className="px-3 py-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-white rounded-lg">Apply</button>
            </div>
            <button onClick={() => setShowCoupons(true)} className="text-sm text-blue-600">View all coupons</button>

            {appliedCoupon && (
              <div className="mt-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-green-800 dark:text-green-300">{appliedCoupon.code} applied</div>
                    <div className="text-sm text-green-600">You saved <span className="font-[Roboto]">₹</span>{discount.toFixed(2)}</div>
                  </div>
                  <button onClick={handleRemoveCoupon} className="text-green-700">Remove</button>
                </div>
              </div>
            )}

            {/* Price breakdown */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Items ({cartItems.length})</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount</span>
                  <span>- ₹{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span>Delivery</span>
                <span>{deliveryCharges === 0 ? "FREE" : `$${deliveryCharges.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between mt-3 font-semibold text-lg border-t pt-3">
                <span>Amount to pay</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4">
              <SwipeToPayButton total={total} onComplete={handleCheckout} />
            </div>
          </div>

          {/* Gift + security */}
          <div className="bg-white/90 dark:bg-gray-800/80 p-4 rounded-2xl shadow-gray-300 shadow-md text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="h-4 w-4 text-pink-500" /> <span>Mark this as a gift</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <CreditCard className="h-4 w-4" /> <span>Secure payment • 256-bit encryption</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Coupon overlay */}
      <CouponSection open={showCoupons} onClose={() => setShowCoupons(false)} coupons={mockCoupons} cartTotal={subtotal} onSelectCoupon={handleCouponSelect} appliedCoupon={appliedCoupon} />

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: "40%", x: 0, scale: 0 }}
                animate={{ y: [-10, -240, -420], x: (Math.random() * 600 - 300), scale: [0, 1, 0.6], rotate: [0, 180, 360] }}
                transition={{ duration: 2.4, delay: i * 0.06, ease: "easeOut" }}
                className={`absolute w-3 h-3 ${['bg-pink-500','bg-violet-500','bg-sky-400','bg-emerald-400','bg-yellow-400'][i % 5]} rounded-full`}
              />
            ))}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-green-500 text-white px-6 py-3 rounded-full font-medium shadow-lg">
              <div className="flex items-center gap-2"><Sparkles className="h-5 w-5" /> Coupon Applied!</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
