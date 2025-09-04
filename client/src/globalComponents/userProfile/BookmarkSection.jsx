import { Bookmark, Heart } from "lucide-react";
import Button from "../../components/ui/Button";
import { BookCard } from "../../components/ui/BookCard";

export function BookmarksSection({ bookmarks, onRemoveBookmark }) {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Bookmarks</h1>
          <p className="text-gray-600 dark:text-gray-400">Your saved books for later reading</p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-pastel-purple/50 to-pastel-pink/50 px-4 py-2 rounded-full">
          <Heart className="h-4 w-4 text-vibrant-purple" />
          <span className="font-medium text-gray-900 dark:text-white">{bookmarks.length} saved</span>
        </div>
      </div>

      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} onRemove={onRemoveBookmark} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pastel-purple to-vibrant-purple/20 rounded-full flex items-center justify-center">
            <Bookmark className="h-12 w-12 text-vibrant-purple" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">No bookmarks yet</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
            Start exploring our collection and save books you'd like to read later. 
            You can bookmark books by clicking the heart icon on any book card.
          </p>
          <Button className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:shadow-lg transition-all duration-300">
            <Bookmark className="h-4 w-4 mr-2" />
            Browse Books
          </Button>
        </div>
      )}
    </div>
  );
}
