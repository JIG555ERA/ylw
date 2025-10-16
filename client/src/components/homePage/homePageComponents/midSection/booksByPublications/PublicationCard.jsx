import React from "react";
import { TrendingUp, BookOpen, Users, Star, Calendar } from "lucide-react";

const cardContext = {
  publicationName: "Sample Publication",
  logo: "",
  description: "This is a short description for the publication. It gives a brief overview of the content and theme.",
  tags: ["Literary Fiction", "Children Fiction", "Children's Book"],
  books: 2500,
  readers: 56000,
  averageRating: 4.2,
  establishedAt: 1992,
};

const PublicationCard = ({ context = cardContext }) => {
  return (
    <div className="w-[300px] h-[500px] group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-0 bg-white rounded-3xl backdrop-blur-sm hover:backdrop-blur-md cursor-pointer">
      
      {/* Background Banner */}
      <div className="h-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80"></div>
        <div className="w-full h-full bg-gray-300 opacity-60"></div>
        {/* <div className="absolute top-3 right-3 bg-white/90 text-blue-500 px-[8px] rounded-2xl font-semibold text-[14px] shadow-lg">
          ★ Verified
        </div> */}
      </div>

      <div className="relative p-6 -mt-8">
        
        {/* Logo */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-sm border-2 border-white/20 mt-[24px]">
          {!context.logo && (
            <div className="w-full h-full bg-gray-200"></div>
          )}
          {context.logo && (
            <img 
            className="w-full h-full"
            src={context.logo} 
            alt={context.logo} />
          )}
        </div>

        {/* Publication Info */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-2 text-black transition-colors group-hover:bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 bg-clip-text group-hover:text-transparent">
            {context.publicationName}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {context.description}
          </p>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap justify-center mb-4 gap-2 overflow-x-hidden">
          {context.tags.slice(0, 2).map((tag, index) => (
            <div
              key={index}
              className="text-[11px] bg-white/60 border border-gray-100 flex justify-center items-center rounded-2xl px-2 py-1 hover:shadow-md shadow-gray-300 backdrop-blur-sm"
            >
              {tag}
            </div>
          ))}
          <div
              className="text-xs bg-white/60 border border-gray-100 flex justify-center items-center rounded-2xl px-2 py-1 hover:shadow-md shadow-gray-300 backdrop-blur-sm"
            >
              + {context.tags.length - 2}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <BookOpen className="w-3 h-3 text-blue-500" /> 
              <span className="text-xs font-semibold text-black">{context.books.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500">Books</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-3 h-3 text-teal-500" /> 
              <span className="text-xs font-semibold text-black">{context.readers.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500">Readers</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-3 h-3 text-amber-300" /> 
              <span className="text-xs font-semibold text-black">{context.averageRating}</span>
            </div>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
        </div>

        {/* Founded Year */}
        <div className="flex items-center justify-center gap-1 mb-4 text-xs text-gray-500">
          <Calendar className="w-3 h-3 text-gray-800" /> 
          <span>Since {context.establishedAt}</span>
        </div>

        {/* Explore Button */}
        <button className="w-full h-7.5 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-2xl flex justify-center items-center gap-[8px] font-medium">
          <TrendingUp className="w-4 h-4 text-white" /> Explore Books
        </button>
      </div>
    </div>
  );
};

export default PublicationCard;
