import { useState, useEffect } from "react";
import {
  CheckCircle,
  Package,
  Clock,
  MapPin,
  CreditCard,
  Truck,
  Calendar,
  Star,
  ArrowLeft,
  Download,
  Share2,
  MessageCircle,
} from "lucide-react";
import { Navbar } from '../../components/homePage/homePageComponents/topSection/navBar/navbar'
import PhoneNavBar from "../homePage/homePageComponents/topSection/navBar/PhoneNavBar";
import ImageSection from "../../globalComponents/ImageSection";
import img01 from '../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../assets/bookCoverPages/coverPage03.svg'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'
import NewsLetter from "../../globalComponents/NewsLetter";

// Mock Data
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

const promotionalAds = [
  {
    title: "20% OFF Science Fiction",
    subtitle: "Explore new worlds with our sci-fi collection",
    gradient: "from-blue-500 to-cyan-400",
    icon: "🚀",
  },
  {
    title: "Free Shipping on $50+",
    subtitle: "No minimum order required this week only",
    gradient: "from-green-500 to-emerald-400",
    icon: "📦",
  },
  {
    title: "Join Book Club",
    subtitle: "Connect with fellow readers and discuss",
    gradient: "from-purple-500 to-pink-400",
    icon: "👥",
  },
  {
    title: "New Arrivals Daily",
    subtitle: "Fresh picks from bestselling authors",
    gradient: "from-yellow-400 to-orange-400",
    icon: "✨",
  },
];

const cartItems = [
        {id: 0, bookCoverPage: img01, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 80, tags: [{ language: 'English' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 3},
        {id: 1, bookCoverPage: img03, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 80, tags: [{ language: 'Chinese' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 2},
        {id: 2, bookCoverPage: img02, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199, discountedPrice: 80, tags: [{ language: 'Chinese' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 1},
        
  ]

const OrderConfirmation = ({ onBackToShop }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentAdIndex((prev) => (prev + 1) % promotionalAds.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const currentAd = promotionalAds[currentAdIndex];
  const [ deliveryCharges, setDeliveryCharges ] = useState(30)
      const totalItems = (cartItems.reduce((sum, item) => sum + item.quantity, 0));
      const totalPrice = (cartItems.reduce((sum, item) => sum + item.bookPrice * item.quantity, 0))
      const discountedPrice = (cartItems.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0))

  return (
    <div className="w-full h-auto bg-gradient-to-br from-purple-100 via-white to-blue-100 font-[Poppins]">
      <Navbar active="" />
      <a href="/" className="block lg:hidden w-full pt-4">
          <div className="flex justify-center items-center">
                <img
                  src={bookStoreLogo}
                  alt="Book Store Logo"
                  className="h-[72px] w-auto" // Adjust size as needed
                />
              </div>
      </a>
      <div className="lg:py-[130px] pt-[24px] pb-[120px] xl:px-[120px] md:px-[80px] px-[16px]">
        {/* Back Button */}
      <a href="/">
        <button
          className="mb-6 flex items-center text-purple-600 hover:text-purple-800 transition cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </button>
      </a>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full mb-6 shadow-lg animate-pulse">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
        <h1 className="lg:text-4xl text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 lg:text-[16px] text-[14px]">
          Thank you for your purchase, {mockOrder.shippingAddress.name}
        </p>
        <p className="text-gray-500 lg:text-[16px] text-[14px]">
          Order #{mockOrder.orderId} • Placed on {mockOrder.orderDate}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Timeline */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-6 flex items-center gap-2 text-[18px]">
              {/* <Clock className="h-5 w-5 text-blue-500" />  */}
              Delivery Timeline
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Order Confirmed",
                  desc: "Your order has been received and confirmed",
                  icon: <CheckCircle className="h-5 w-5 text-white" />,
                  color: "from-green-500 to-emerald-400",
                  badge: "Completed",
                },
                {
                  title: "Processing",
                  desc: "We're preparing your books for shipment",
                  icon: <Package className="h-5 w-5 text-white" />,
                  color: "from-blue-500 to-cyan-400",
                  badge: "In Progress",
                },
                {
                  title: "Shipped",
                  desc: "Your package is on its way",
                  icon: <Truck className="h-5 w-5 text-gray-400" />,
                  color: "",
                  badge: "Pending",
                },
                {
                  title: "Delivered",
                  desc: `Estimated: ${mockOrder.estimatedDelivery}`,
                  icon: <Calendar className="h-5 w-5 text-gray-400" />,
                  color: "",
                  badge: "Pending",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.color
                        ? `bg-gradient-to-br ${step.color} shadow-md`
                        : "bg-gray-100"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        step.color ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      step.color
                        ? "bg-gradient-to-r " + step.color + " text-white"
                        : "border border-gray-300 text-gray-500"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white lg:p-6 py-3 px-2 rounded-2xl shadow-md">
            {/* <h3 className="font-semibold mb-6 flex items-center gap-2">
              <Package className="h-5 w-5 text-purple-500" /> Order Items (
              {mockOrder.items.length})
            </h3>
            <div className="space-y-4">
              {mockOrder.items.map((item) => (
                <div
                  key={item.book.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={item.book.image}
                    alt={item.book.title}
                    className="w-16 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.book.title}</h4>
                    <p className="text-sm text-gray-500">{item.book.author}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                        {item.book.language}
                      </span>
                      <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">
                        {item.book.category}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(item.book.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        {item.book.rating} ({item.book.reviewCount})
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-purple-600">
                      ${item.book.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-medium">
                      ${(item.book.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
             <h1
                    className='text-[18px] font-semibold pl-2'>
                        Order Items <span>(</span>{totalItems}<span>)</span>
                    </h1>

                    <div
                    className='w-full h-[320px] overflow-y-scroll scrollbar-2px overflow-x-clip lg:mt-[16px] mt-[12px]'>
                        {cartItems.map((book, index, arr) => (
                        <div
                        key={book.id}
                        className='lg:w-[25vw] lg:h-[130px] h-[135px] flex justify-between mt-[24px]'>
                            <div
                            className='h-full flex'>
                                <div className="w-[90px] sm:w-[100px] lg:h-auto h-[125px] aspect-[3/4] mx-auto ">
                                    <ImageSection bookCoverPage={book.bookCoverPage} />
                                </div>
                                <div
                                className='flex flex-col lg:ml-[20px] ml-[8px]'>
                                    <h1
                                    className='text-[#000000] text-[16px] font-semibold mt-1 line-clamp-1'>
                                        {book.bookTitle}
                                    </h1>
                                    <p
                                    className='text-[#7C7C7C] text-[14px] font-normal'>
                                        {book.bookAuthor}
                                    </p>
                                    <div>
                                        <div
                                        className='flex text-[#064FA4] text-[14px] rounded-[12px] font-medium w-full h-[35px]'>
                                            <div
                                            className='mt-1.5 flex'>
                                                <p
                                                className='text-[#000000] flex'>
                                                    <span className='text-[#7C7C7C] mr-1'>Qty: </span> {book.quantity} 
                                                </p>
                                                <span className='w-2'/>
                                                <p
                                                className='text-[#000000]'>
                                                    <span className='text-[#7C7C7C]'>Price: </span> <span className='font-[Roboto]'>₹</span>{book.discountedPrice * book.quantity} 
                                                </p>
                                                <span className='w-2'/>
                                                <p
                                                className='text-[#7C7C7C] text-[12px] mt-0.5 line-through'>
                                                    <span className='font-[Roboto]'>₹</span>{book.bookPrice * book.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                    className='flex mt-1.5 '>
                                        <div className='flex lg:gap-3 gap-1.5'>
                                            <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#EFF6FF] border border-[#D9E3FC] text-[13px] text-[#1447E7] flex justify-center items-center rounded-2xl pb-2'>
                                            {cartItems[index].tags[0].language}
                                            </div>
                                            <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#FAF5FF] border border-[#EEDCFB] text-[13px] text-[#8101DB] flex justify-center items-center rounded-2xl pb-2'>
                                            {cartItems[index].tags[1].genre}
                                            </div>
                                            <div className='md:translate-y-[0px] translate-y-[30px] lg:translate-x-[0vw] translate-x-[-45vw] font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#FEFCE8] border border-[#F6E4BA] text-[13px] text-[#884B00] flex justify-center items-center rounded-2xl pb-2'>
                                            {cartItems[index].tags[2].type}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            {/* <div
                            className='w-[80px] h-[65px] mt-2 flex flex-col ml-4'>
                                <div
                                className='flex bg-[#EBF4FF] text-[#064FA4] text-[16px] rounded-[12px] font-normal w-[80px] h-[35px] justify-around'>
                                    <div
                                    onClick={() => decQuantity(book.id)}
                                    className='cursor-pointer mt-1'>
                                        -
                                    </div>
                                    <p
                                    className='mt-1'>
                                        {book.quantity} Qty
                                    </p>
                                    <div
                                    onClick={() => incQuantity(book.id)}
                                    className='cursor-pointer mt-1'>
                                        +
                                    </div>
                                </div>
                                <div
                                className='w-[80px] h-[30px] flex justify-between text-[16px] mt-1'>
                                    <p
                                    className='text-[#000000] font-semibold '>
                                        ₹{book.discountedPrice * book.quantity} 
                                    </p>
                                    <p
                                    className='text-[#7C7C7C] font-semibold line-through'>
                                        ₹{book.bookPrice * book.quantity}
                                    </p>
                                </div>
                            </div> */}
                            

                        </div>
                    ))}
                    </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-[18px] font-semibold mb-6 flex items-center gap-2">
              {/* <CreditCard className="h-5 w-5 text-green-500" /> */}
               Order Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[14px]">
                <span className="text-[#7C7C7C]">Item Total</span>
                <span className="text-[18px] font-semibold"><span className="font-[Roboto]">₹</span>{totalPrice}</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-[#7C7C7C] ">Discount</span>
                <span className="text-green-400 text-[18px] font-semibold"><span className="font-[Roboto] ">- ₹</span>{totalPrice - discountedPrice}</span>
              </div>
              <div className="flex justify-between text-[14px] pb-[16px]">
                <span className="text-[#7C7C7C] ">Delivery Charges</span>
                <span className="text-[18px] font-semibold"><span className="font-[Roboto]">₹</span>{deliveryCharges}</span>
              </div>
              <hr className="bg-[#EFEFEF] border-t-2 border-[#E9E9E9]"/>
              <div className="flex justify-between font-medium text-black/80 text-lg ">
                <span className=" text-[14px]">Total Amount</span>
                <span className="text-[18px] font-semibold"><span className="font-[Roboto]">₹</span>{discountedPrice + deliveryCharges}</span>
              </div>
            </div>
           <div
           className="flex justify-between items-center mt-4">
             <p className="text-[14px] text-gray-500">Payment Method</p>
            <p className="font-medium text-[14px]">{`XXXX 1234 (Visa)`}</p>
           </div>
            <div className="flex gap-2 mt-4">
              <div
                className="group w-[200px] group-hover:w-[200px] md:h-[40px] h-[32px] 
                          border border-blue-500 font-semibold flex justify-center items-center 
                          rounded-[30px] lg:text-[14px] text-[12px] cursor-pointer 
                          transition-all duration-1000 ease-in-out mx-auto 
                          bg-white relative overflow-hidden md:mt-[0px] mt-[12px] hover:shadow-md hover:shadow-gray-400 hover:scale-105"
              >
                <span
                  className="bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                            bg-clip-text text-transparent transition-all duration-1000 ease-in-out 
                            group-hover:text-white group-hover:bg-none flex gap-2 justify-center items-center"
                >
                  <Download className="text-blue-400 group-hover:text-white h-4.5 w-4.5"/> Invoice
                </span>

                {/* Hover gradient background overlay */}
                <div
                  className="absolute inset-0 rounded-[30px] 
                            bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                            opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
                />
              </div>
              <div
                className="group w-[200px] group-hover:w-[200px] md:h-[40px] h-[32px] 
                          border border-blue-500 font-semibold flex justify-center items-center 
                          rounded-[30px] lg:text-[14px] text-[12px] cursor-pointer 
                          transition-all duration-1000 ease-in-out mx-auto 
                          bg-white relative overflow-hidden md:mt-[0px] mt-[12px] hover:shadow-md hover:shadow-gray-400 hover:scale-105"
              >
                <span
                  className="bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                            bg-clip-text text-transparent transition-all duration-1000 ease-in-out 
                            group-hover:text-white group-hover:bg-none flex gap-2 justify-center items-center"
                >
                  <Share2 className="text-blue-400 group-hover:text-white h-4.5 w-4.5"/> Share
                </span>

                {/* Hover gradient background overlay */}
                <div
                  className="absolute inset-0 rounded-[30px] 
                            bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                            opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
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

          {/* Support */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-[18px] mb-4 flex items-center gap-2">
              {/* <MessageCircle className="h-5 w-5 text-blue-500" />  */}
              Need Help?
            </h3>
            <p className="text-sm text-[#7C7C7C]/60 mb-4">
              Have questions about your order? Our support team is here to help.
            </p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 rounded-3xl shadow hover:shadow-lg transition cursor-pointer">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Ads */}
      <div className="mt-16 text-center">
        <div
          className={`p-8 rounded-2xl shadow-lg bg-gradient-to-r ${currentAd.gradient} text-white transition-all duration-500`}
        >
          <div className="text-4xl mb-4">{currentAd.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{currentAd.title}</h3>
          <p className="mb-4">{currentAd.subtitle}</p>
          <button className="bg-white/20 px-4 py-2 rounded hover:bg-white/30">
            Learn More
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {promotionalAds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAdIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentAdIndex
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <NewsLetter />
      </div>
      <PhoneNavBar />
    </div>
  );
}

export default OrderConfirmation;