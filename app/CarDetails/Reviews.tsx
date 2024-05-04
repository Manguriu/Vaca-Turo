import React from "react";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-300 me-1"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const Reviews = () => {
  // Data for ratings
  const ratingsData = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 17 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 4 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="bg-white  p-6 rounded-md">
      {/* Overall Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} />
        ))}
        <p className="ml-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
          4.95 out of 5
        </p>
      </div>
      {/* Global Ratings Count */}
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      {/* Star Ratings with Percentage */}
      {ratingsData.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center mt-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {item.stars} star
          </a>
          {/* Rating Bar */}
          <div className="flex items-center justify-between w-1/2 ml-4">
            <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
              <motion.div
                className="h-full bg-yellow-300"
                style={{ width: `${item.percentage}%` }}
              ></motion.div>
            </div>
            {/* Rating Percentage */}
            <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              {item.percentage}%
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Reviews;
