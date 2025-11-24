import React from "react";

const MovieCard = ({ src, alt, title, movieType, rating }) => {
return (
    <div className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: '#0F0D23' }}>
        <div className="relative p-2 ">
            <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover rounded-2xl"
            />
        </div>
        <div className="p-4">
            <h3 className="text-white font-semibold text-lg mb-2 leading-snug two-line">
                {title}
            </h3>
            <div className="flex items-center justify-between">
                {movieType && (
                    <span className="inline-block bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                        {movieType}
                    </span>
                )}
                {rating && (
                    <span className="text-yellow-500 font-bold text-sm">
                        ⭐ {Number(rating).toFixed(1)}
                    </span>
                )}
            </div>
        </div>
    </div>
);
};

export default MovieCard;
