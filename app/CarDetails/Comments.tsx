import React from "react";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-300"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const Comments = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-md">
      <article>
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 me-4 rounded-full object-cover"
            src="/person.jpg"
            alt=""
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              Jese Leos
            </p>
            <time
              dateTime="2014-08-16 19:00"
              className="block text-xs text-gray-500 dark:text-gray-400"
            >
              Joined on August 2014
            </time>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          {[...Array(4)].map((_, index) => (
            <StarIcon key={index} />
          ))}
          <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
            Thinking to buy another one!
          </h3>
        </div>
        <footer className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          <p>
            Reviewed in the United Kingdom on{" "}
            <time dateTime="2017-03-03 19:00">March 3, 2017</time>
          </p>
        </footer>
        <p className="mb-2 text-gray-600 dark:text-gray-300">
          This is my third Invicta Pro Diver. They are just fantastic value for
          money. This one arrived yesterday and the first thing I did was set
          the time, popped on an identical strap from another Invicta and went
          in the shower with it to test the waterproofing.... No problems.
        </p>

        <aside className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Helpful
          </motion.button>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Report abuse
          </a>
        </aside>
      </article>
    </div>
  );
};

export default Comments;
