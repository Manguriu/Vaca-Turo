import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-20 border-t border-gray-100  bg-slate-200 ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start max-md:items-center gap-6">
          <Image
            src="/logo.png"
            alt="king logo"
            width={250}
            height={100}
            className="object-contain"
          />
          <p className="text-base text-gray-700 max-md:flex max-md:flex-col items-center flex flex-col ">
            <span className="max-md:text-[20px] ">KingVac Car Rentals 2024 </span>
            <span className="max-md:text-[20px] ">All rights reserved &copy;</span>
          </p>
        </div>
        <div className="footer__links ">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link ">
              <h3 className="font-bold max-md:text-[20px] font-Josefin">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 max-md:text-[18px] font-Josefin"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center md:flex  mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10 ">
          <Link href="/" className="text-gray-500 max-md:text-[20px] font-Josefin">
            Private policy
          </Link>
          <Link href="/" className="text-gray-500 max-md:text-[20px] font-Josefin">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
