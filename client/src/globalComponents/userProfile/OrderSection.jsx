import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Calendar, Filter, ArrowLeft, Eye, Truck, CheckCircle, Clock } from "lucide-react";

import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";

const mockOrders = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: 49.97,
    items: [
      {
        id: "1",
        bookTitle: "The Midnight Library",
        author: "Sarah Chen",
        price: 14.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      },
      {
        id: "2",
        bookTitle: "Atomic Habits",
        author: "Priya Patel",
        price: 16.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
      },
    ],
    shippingAddress: "123 Main Street, New York, NY 10001",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    date: "2024-01-20",
    status: "in-progress",
    total: 31.98,
    items: [
      {
        id: "3",
        bookTitle: "Thinking, Fast and Slow",
        author: "Marcus Thompson",
        price: 16.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      },
      {
        id: "4",
        bookTitle: "The Silent Patient",
        author: "Elena Rodriguez",
        price: 14.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      },
    ],
    shippingAddress: "123 Main Street, New York, NY 10001",
    estimatedDelivery: "2024-01-25",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    date: "2024-01-18",
    status: "delivered",
    total: 22.99,
    items: [
      {
        id: "5",
        bookTitle: "Dune",
        author: "Luna Martinez",
        price: 12.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      },
    ],
    shippingAddress: "123 Main Street, New York, NY 10001",
    estimatedDelivery: "2024-01-22",
  },
];

export function OrdersSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = mockOrders.filter(
    (order) => selectedFilter === "all" || order.status === selectedFilter
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "failed":
        return <Truck className="h-4 w-4" />;
      case "in-progress":
        return <Clock className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 ";
      case "failed":
        return "bg-red-100 text-red-800 ";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 ";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (selectedOrder) {
    return (
      <div className="max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => setSelectedOrder(null)}
          className="mb-6 text-white bg-gradient-to-br from-blue-300 via-blue-500 to-purple-500 hover:scale-105 cursor-pointer shadow-md hover:shadow-md shadow-gray-300 hover:shadow-gray-400"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Orders
        </Button>

        {/* Order Details */}
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-semibold">
                Order {selectedOrder.orderNumber}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Placed on{" "}
                {new Date(selectedOrder.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Badge
              className={`${getStatusColor(
                selectedOrder.status
              )} flex items-center gap-1`}
            >
              {getStatusIcon(selectedOrder.status)}
              {selectedOrder.status}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Shipping Address</h3>
              <p className="text-gray-600 ">
                {selectedOrder.shippingAddress}
              </p>
            </div>
            {selectedOrder.estimatedDelivery && (
              <div>
                <h3 className="font-medium mb-2">Estimated Delivery</h3>
                <p className="text-gray-600 ">
                  {new Date(
                    selectedOrder.estimatedDelivery
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Items */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Order Items</h3>
          <div className="space-y-4">
            {selectedOrder.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.bookTitle}
                  className="w-16 h-20 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.bookTitle}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    by {item.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="text-right font-semibold">
                  <span className="font-[Roboto]">₹</span>{item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t mt-6 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span><span className="font-[Roboto]">₹</span>{selectedOrder.total.toFixed(2)}</span>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Your Orders</h1>
          <p className="text-gray-600 ">
            Track and manage your book orders
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-vibrant-purple" />
          <span className="font-medium">Filter Orders</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["all", "delivered", "in-progress", "failed"].map(
            (filter) => (
              <Button
                key={filter}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={
                  selectedFilter === filter
                    ? "bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-white cursor-pointer"
                    : "bg-gradient-to-br from-gray-300 via-gray-500 to-gray-400 cursor-pointer text-white"
                }
              >
                {filter.replace("-", " ")}
              </Button>
            )
          )}
        </div>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer group"
            onClick={() => setSelectedOrder(order)}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold group-hover:text-vibrant-purple">
                    Order {order.orderNumber}
                  </h3>
                  <p className="text-sm text-gray-600 ">
                    {new Date(order.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={`${getStatusColor(order.status)} flex items-center gap-1`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                  {/* <Eye className="h-4 w-4 text-gray-400 group-hover:text-vibrant-purple" /> */}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {order.items.slice(0, 3).map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.bookTitle}
                      className="w-12 h-16 object-cover rounded-lg border-2 border-white shadow-md"
                    />
                  ))}
                  {order.items.length > 3 && (
                    <div className="w-12 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg border-2 border-white flex items-center justify-center shadow-md">
                      <span className="text-xs font-medium text-gray-600 ">
                        +{order.items.length - 3}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 ">
                    {order.items.length} item
                    {order.items.length !== 1 ? "s" : ""}
                  </p>
                  <p className="font-semibold">
                    Total: <span className="font-[Roboto]">₹</span>{order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              {order.estimatedDelivery && (
                <div className="text-sm text-gray-600 flex  items-center">
                  <Calendar className="h-4 w-4 inline mr-1" />
                  Estimated delivery:{" "}
                  {new Date(order.estimatedDelivery).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric" }
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No orders found</h3>
          <p className="text-gray-600 ">
            {selectedFilter === "all"
              ? "You haven't placed any orders yet."
              : `No ${selectedFilter} orders found.`}
          </p>
        </div>
      )}
    </div>
  );
}
