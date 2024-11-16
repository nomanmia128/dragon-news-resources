import React from "react";
import { FaRegEye } from "react-icons/fa"; // Eye icon
import { BsShare } from "react-icons/bs"; // Share icon
import { AiFillStar } from "react-icons/ai"; // Star icon

const NewsCard = ({ news }) => {
    const {
        author,
        title,
        thumbnail_url,
        details,
        total_view,
        rating,
        others_info,
    } = news;

    return (
        <div className="card bg-white shadow-lg border rounded-lg p-5">
            {/* Header: Author and Share */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{news.author.name}</h3>
                        <p className="text-xs text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>
                <button className="text-gray-500">
                    <BsShare className="text-lg" />
                </button>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-4">{news.title}</h2>

            {/* Thumbnail Image */}
            <img
                src={news.thumbnail_url}
                alt={news.title}
                className="w-full h-56 object-cover rounded-md mb-4"
            />

            {/* Details */}
            <p className="text-sm text-gray-600 mb-4">
                {news.details.length > 150 ? `${details.slice(0, 150)}...` : details}
                <span className="text-blue-500 font-medium cursor-pointer">
                    {" "}
                    Read More
                </span>
            </p>

            {/* Footer: Rating and Views */}
            <div className="flex justify-between items-center">
                {/* Rating */}
                <div className="flex items-center text-yellow-500">
                    <AiFillStar />
                    <span className="ml-1 text-gray-800 font-medium">
                        {rating.number || 0}
                    </span>
                </div>

                {/* Views */}
                <div className="flex items-center text-gray-500">
                    <FaRegEye />
                    <span className="ml-1">{total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
