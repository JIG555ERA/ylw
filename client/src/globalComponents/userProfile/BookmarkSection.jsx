import { Bookmark, Heart } from "lucide-react";
import Button from "../../components/ui/Button";
import { BookCard } from "../../components/ui/BookCard";

export function BookmarksSection({ bookmarks, onRemoveBookmark }) {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900  mb-2">Bookmarks</h1>
          <p className="text-gray-600 ">Your saved books for later reading</p>
        </div>
        <div className="md:w-auto w-[40%] flex items-center gap-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 px-4 py-2 rounded-full">
          <Heart className="h-4 w-4 text-white" />
          <span className="font-medium text-white">{bookmarks.length} saved</span>
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
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 rounded-full flex items-center justify-center">
            <Bookmark className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ">No bookmarks yet</h3>
          <p className="text-gray-600  max-w-md mx-auto mb-6">
            Start exploring our collection and save books you'd like to read later. 
            You can bookmark books by clicking the heart icon on any book card.
          </p>
          <Button className="bg-gradient-to-br from-blue-300 via-blue-500 text-white to-purple-300 hover:shadow-lg transition-all duration-300">
            <Bookmark className="h-4 w-4 mr-2" />
            Browse Books
          </Button>
        </div>
      )}
    </div>
  );
}
