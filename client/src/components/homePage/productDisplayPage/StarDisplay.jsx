import React from "react";
import { Star, StarHalf, Star as StarOutline } from "lucide-react"

const StarRating = ({ rating = 0, maxStars = 5, size = 21}) => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        if (i <= rating) {
            // fully filled star
            stars.push(<Star key={i} size={size} fill="gold" stroke="gold" />)
        } else if (i - 0.5 <= rating) {
            // half filled star
            stars.push(<StarHalf key={i} size={size} fill="gold" stroke="gold" />)
        } else {
            // empty star
            stars.push(<StarOutline key={i} size={size} fill="#CBCBCB" stroke="#CBCBCB" />)
        }
    }

    return <div className="flex gap-1">{stars}</div>
}

export default StarRating;