import { motion } from "motion/react";
import { X, Star, ShoppingCart } from "lucide-react";
import Button  from "./Button";
import Badge  from "./Badge";

export function BookCard({ book, index = 0, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Remove Button */}
      {onRemove && (
        <div className="flex justify-end mb-2">
          <button
            onClick={() => onRemove(book.id)}
            className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-700/50 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Book Image */}
      <div className="relative mb-4">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
        />
        {book.isNew && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-vibrant-green to-vibrant-emerald text-white">
            New
          </Badge>
        )}
        {book.isOnSale && (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-vibrant-orange to-vibrant-red text-white">
            Sale
          </Badge>
        )}
      </div>

      {/* Book Details */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-vibrant-purple transition-colors line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">by {book.author}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900 dark:text-white">{book.rating}</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({book.reviewCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {book.originalPrice && book.originalPrice > book.price ? (
            <>
              <span className="font-semibold text-gray-900 dark:text-white">
                ₹{book.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ₹{book.originalPrice.toFixed(2)}
              </span>
              <Badge variant="outline" className="text-xs text-vibrant-red border-vibrant-red">
                {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% off
              </Badge>
            </>
          ) : (
            <span className="font-semibold text-gray-900 dark:text-white">
              ₹{book.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Category and Year */}
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <Badge variant="outline" className="text-xs">
            {book.category}
          </Badge>
          <span>{book.publishYear}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:shadow-lg transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button size="sm" variant="outline" className="px-3">
            View
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
