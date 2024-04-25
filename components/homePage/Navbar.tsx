// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import CustomButton from "../CustomButton";

// const Navbar = () => {
//   return (
//     <header className="w-full z-10 bg-white">
//       <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
//         <Link href="/" className="flex justify-center items-center">
//           <Image
//             src="/logo.png"
//             alt="king logo"
//             width={250}
//             height={100}
//             className="object-contain"
//           />
//         </Link>

//         <div className="flex gap-6">
//           <Link
//             href="/"
//             className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
//           >
//             <h1>Home</h1>
//           </Link>
//           <Link
//             href="/"
//             className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
//           >
//             <h1>Featured Cars</h1>
//           </Link>
//           <Link
//             href="/"
//             className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
//           >
//             <h1>Cars by make</h1>
//           </Link>
//           <Link
//             href="/FeaturedHomes"
//             className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
//           >
//             <h1>Featured Homes</h1>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton";

const Navbar = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full z-10 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="king logo"
            width={250}
            height={100}
            className="object-contain"
          />
        </Link>

        <div className="flex gap-6">
          <a
            href="/"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
          >
            <h1>Home</h1>
          </a>
          <a
            href="#FeaturedCars"
            onClick={(e) => handleClick(e, "FeaturedCars")}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
          >
            <h1>Featured Cars</h1>
          </a>
          <a
            href="#cars"
            onClick={(e) => handleClick(e, "cars")}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
          >
            <h1>Cars by make</h1>
          </a>
          <Link
            href="/FeaturedHomes"
            onClick={(e) => handleClick(e, "FeaturedHomes")}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl"
          >
            <h1>Featured Homes</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
