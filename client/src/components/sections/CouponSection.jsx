import { motion } from "motion/react";
import { ArrowLeft, Gift, AlertCircle, Check } from "lucide-react";
import  Button from "../ui/Button";

export function CouponSection({ 
  isOpen, 
  onClose, 
  coupons, 
  cartTotal, 
  onSelectCoupon, 
  appliedCoupon 
}) {
  if (!isOpen) return null;

  const eligibleCoupons = coupons.filter(coupon => cartTotal >= coupon.minimumOrder);
  const ineligibleCoupons = coupons.filter(coupon => cartTotal < coupon.minimumOrder);

  const formatDiscount = (coupon) => {
    if (coupon.discountType === 'percentage') {
      return `${coupon.discount}% OFF`;
    } else {
      return `$${coupon.discount} OFF`;
    }
  };

  const getDiscountAmount = (coupon) => {
    if (coupon.discountType === 'percentage') {
      const discount = (cartTotal * coupon.discount) / 100;
      return coupon.maxDiscount ? Math.min(discount, coupon.maxDiscount) : discount;
    } else {
      return coupon.discount;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Coupon Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative ml-auto w-full max-w-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">APPLY COUPON</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your cart: ${cartTotal.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Ineligible Items Notice */}
          {ineligibleCoupons.length > 0 && (
            <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/50 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-orange-800 dark:text-orange-300">
                    {ineligibleCoupons.length} discounted item worth ${(cartTotal - eligibleCoupons.reduce((sum, c) => sum + getDiscountAmount(c), 0)).toFixed(2)} is not eligible for any coupons
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Best Coupon Section */}
          {eligibleCoupons.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Best coupon</h3>
              <motion.div
                key={eligibleCoupons[0].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${eligibleCoupons[0].color} opacity-10`}></div>
                
                {/* Left Color Strip */}
                <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b ${eligibleCoupons[0].color} flex items-center justify-center`}>
                  <div className="text-white font-bold text-xs transform -rotate-90 whitespace-nowrap">
                    {formatDiscount(eligibleCoupons[0])}
                  </div>
                </div>

                {/* Content */}
                <div className="relative pl-20 pr-6 py-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {eligibleCoupons[0].title}
                      </h4>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                        {eligibleCoupons[0].description}
                      </p>
                    </div>
                    <Button
                      onClick={() => onSelectCoupon(eligibleCoupons[0])}
                      disabled={appliedCoupon?.id === eligibleCoupons[0].id}
                      className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                        appliedCoupon?.id === eligibleCoupons[0].id
                          ? 'bg-green-500 text-white'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      {appliedCoupon?.id === eligibleCoupons[0].id ? (
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          APPLIED
                        </div>
                      ) : (
                        'APPLY'
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Use code {eligibleCoupons[0].code} & get {formatDiscount(eligibleCoupons[0])} on 
                    orders above ${eligibleCoupons[0].minimumOrder.toFixed(2)}.
                    {eligibleCoupons[0].maxDiscount && (
                      ` Maximum discount: $${eligibleCoupons[0].maxDiscount}.`
                    )}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-700 text-xs font-medium p-0 h-auto mt-2"
                  >
                    + MORE
                  </Button>
                </div>
              </motion.div>
            </div>
          )}

          {/* More Offers Section */}
          {eligibleCoupons.length > 1 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">More offers</h3>
              <div className="space-y-4">
                {eligibleCoupons.slice(1).map((coupon, index) => (
                  <motion.div
                    key={coupon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${coupon.color} opacity-10`}></div>
                    
                    {/* Left Color Strip */}
                    <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b ${coupon.color} flex items-center justify-center`}>
                      <div className="text-white font-bold text-xs transform -rotate-90 whitespace-nowrap">
                        {coupon.discountType === 'percentage' ? `${coupon.discount}%` : `$${coupon.discount}`}
                      </div>
                      <div className="absolute bottom-2 left-2 text-white font-bold text-xs transform -rotate-90">
                        {coupon.discountType === 'percentage' ? 'BACK' : 'OFF'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative pl-20 pr-6 py-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {coupon.title}
                          </h4>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                            {coupon.description}
                          </p>
                        </div>
                        <Button
                          onClick={() => onSelectCoupon(coupon)}
                          disabled={appliedCoupon?.id === coupon.id}
                          className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                            appliedCoupon?.id === coupon.id
                              ? 'bg-green-500 text-white'
                              : 'bg-orange-500 hover:bg-orange-600 text-white'
                          }`}
                        >
                          {appliedCoupon?.id === coupon.id ? (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4" />
                              APPLIED
                            </div>
                          ) : (
                            'APPLY'
                          )}
                        </Button>
                      </div>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Use code {coupon.code} & get {formatDiscount(coupon)} on 
                        orders above ${coupon.minimumOrder.toFixed(2)}.
                        {coupon.maxDiscount && (
                          ` Maximum discount: $${coupon.maxDiscount}.`
                        )}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium p-0 h-auto mt-2"
                      >
                        + MORE
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Special Payment Offers */}
          <div className="mb-8">
            <div className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium inline-flex items-center gap-2 mb-4">
              <Gift className="h-4 w-4" />
              View Add-On Payment Offers
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </div>
          </div>

          {/* Ineligible Coupons */}
          {ineligibleCoupons.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Coupons (Add ${(ineligibleCoupons[0].minimumOrder - cartTotal).toFixed(2)} more to unlock)
              </h3>
              <div className="space-y-4">
                {ineligibleCoupons.map((coupon, index) => (
                  <motion.div
                    key={coupon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-gray-100/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden opacity-60"
                  >
                    {/* Left Color Strip - Grayscale */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-400 flex items-center justify-center">
                      <div className="text-white font-bold text-xs transform -rotate-90 whitespace-nowrap">
                        {formatDiscount(coupon)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative pl-20 pr-6 py-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-600 dark:text-gray-400">
                            {coupon.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                            {coupon.description}
                          </p>
                        </div>
                        <Button
                          disabled
                          className="px-6 py-2 text-sm font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
                        >
                          APPLY
                        </Button>
                      </div>
                      
                      <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                        Minimum order value: ${coupon.minimumOrder.toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
