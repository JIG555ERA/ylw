import { Star, BookOpen, Calendar, Users, TrendingUp } from "lucide-react";

const PublicationCard = ({ publication, onPublicationClick }) => {
  return (
    <div
      className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm hover:backdrop-blur-md cursor-pointer rounded-xl"
      onClick={() => onPublicationClick(publication)}
    >
      {/* Background Banner */}
      <div className="h-32 relative overflow-hidden rounded-t-xl">
        <div className={`absolute inset-0 bg-gradient-to-r ${publication.color} opacity-80`}></div>
        <img
          src={publication.bannerImage}
          alt={`${publication.name} banner`}
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
          onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
        />

        {publication.isVerified && (
          <span className="absolute top-3 right-3 flex items-center px-2 py-1 rounded-full bg-white/90 text-vibrant-blue border-0 shadow-lg text-xs font-semibold">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Verified
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="relative p-6 -mt-8">
        {/* Logo */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-xl bg-white/90 dark:bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <img
            src={publication.logo}
            alt={publication.name}
            className="w-full h-full object-cover"
            onError={(e) => (e.target.src = "https://via.placeholder.com/64")}
          />
        </div>

        {/* Publication Info */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-vibrant-purple transition-colors">
            {publication.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {publication.description}
          </p>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {publication.specialties.slice(0, 3).map((specialty, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm"
            >
              {specialty}
            </span>
          ))}
          {publication.specialties.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm">
              +{publication.specialties.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <BookOpen className="h-3 w-3 text-vibrant-blue" />
              <span className="text-xs font-semibold text-foreground">
                {publication.totalBooks.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Books</p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="h-3 w-3 text-vibrant-green" />
              <span className="text-xs font-semibold text-foreground">
                {publication.subscribers.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Readers</p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="h-3 w-3 text-vibrant-yellow" />
              <span className="text-xs font-semibold text-foreground">
                {publication.rating}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div>

        {/* Founded Year */}
        <div className="flex items-center justify-center gap-1 mb-4 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>Since {publication.foundedYear}</span>
        </div>

        {/* Explore Button */}
        <button
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${publication.color} text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm font-medium`}
        >
          <TrendingUp className="h-4 w-4" />
          Explore Books
        </button>
      </div>
    </div>
  );
}

export default PublicationCard;