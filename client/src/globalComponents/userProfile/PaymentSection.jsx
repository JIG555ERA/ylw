// src/components/PaymentsSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, Plus, Check, Star, 
  Edit3, Trash2, Shield, Smartphone 
} from "lucide-react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

const mockPaymentMethods = [
  {
    id: "1",
    type: "card",
    name: "Personal Visa",
    last4: "4242",
    expiryMonth: 12,
    expiryYear: 2027,
    brand: "visa",
    isPrimary: true,
  },
  {
    id: "2",
    type: "card",
    name: "Business Mastercard",
    last4: "8888",
    expiryMonth: 8,
    expiryYear: 2026,
    brand: "mastercard",
    isPrimary: false,
  },
  {
    id: "3",
    type: "upi",
    name: "Google Pay",
    upiId: "john.doe@okaxis",
    isPrimary: false,
  },
  {
    id: "4",
    type: "upi",
    name: "PhonePe",
    upiId: "john.doe@ybl",
    isPrimary: false,
  },
];

const PaymentSection = () => {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);
  const [showAddNew, setShowAddNew] = useState(false);

  const setPrimaryPayment = (id) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isPrimary: method.id === id,
      }))
    );
  };

  const removePaymentMethod = (id) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
  };

  const getCardIcon = () => <CreditCard className="h-6 w-6" />;

  const getCardColor = (brand) => {
    switch (brand) {
      case "visa":
        return "from-blue-500 to-blue-600";
      case "mastercard":
        return "from-red-500 to-red-600";
      case "amex":
        return "from-green-500 to-green-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            Payment Methods
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your saved payment methods and preferences
          </p>
        </div>
        <Button
          onClick={() => setShowAddNew(true)}
          className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:shadow-lg transition-all duration-300"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Method
        </Button>
      </div>

      {/* Security Notice */}
      <div className="bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800/50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Your payments are secure
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              All payment information is encrypted and securely stored. We never
              store your full card details on our servers, and all transactions
              are processed through industry-standard secure payment gateways.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
              method.isPrimary
                ? "border-vibrant-purple/50 shadow-lg ring-2 ring-vibrant-purple/20"
                : "border-gray-200/50 dark:border-gray-700/50"
            }`}
          >
            {/* Primary Badge */}
            {method.isPrimary && (
              <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-vibrant-purple to-vibrant-pink text-white">
                <Star className="h-3 w-3 mr-1" />
                Primary
              </Badge>
            )}

            {method.type === "card" ? (
              <div
                className={`bg-gradient-to-br ${getCardColor(
                  method.brand
                )} rounded-xl p-4 mb-4 text-white shadow-lg`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-white/80 text-sm">{method.name}</div>
                  {getCardIcon(method.brand)}
                </div>
                <div className="text-lg font-mono tracking-wider mb-2">
                  •••• •••• •••• {method.last4}
                </div>
                <div className="text-sm text-white/80">
                  {method.expiryMonth?.toString().padStart(2, "0")}/
                  {method.expiryYear?.toString().slice(2)}
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-vibrant-green to-vibrant-emerald rounded-xl p-4 mb-4 text-white shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-white/80 text-sm">{method.name}</div>
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="text-lg font-medium mb-2">UPI Payment</div>
                <div className="text-sm text-white/80 font-mono">
                  {method.upiId}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              {!method.isPrimary && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPrimaryPayment(method.id)}
                  className="flex-1"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Set as Primary
                </Button>
              )}
              <Button variant="outline" size="sm" className="px-3">
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removePaymentMethod(method.id)}
                className="px-3 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:border-red-700/50 dark:hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add New Payment Method */}
      {showAddNew && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 mb-8"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Add New Payment Method
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2 hover:bg-purple-50 hover:border-purple-200 dark:hover:bg-purple-900/20"
            >
              <CreditCard className="h-6 w-6 text-vibrant-purple" />
              <span>Add Credit/Debit Card</span>
            </Button>

            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2 hover:bg-green-50 hover:border-green-200 dark:hover:bg-green-900/20"
            >
              <Smartphone className="h-6 w-6 text-vibrant-green" />
              <span>Add UPI Payment</span>
            </Button>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setShowAddNew(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-vibrant-purple to-vibrant-pink">
              Continue
            </Button>
          </div>
        </motion.div>
      )}

      {/* Payment Preferences */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
          Payment Preferences
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Auto-save payment methods
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automatically save new payment methods for faster checkout
              </p>
            </div>
            <div className="w-12 h-6 bg-vibrant-purple rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform duration-200"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-xl">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Email payment receipts
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Receive detailed payment receipts via email
              </p>
            </div>
            <div className="w-12 h-6 bg-vibrant-purple rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
