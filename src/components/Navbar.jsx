import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 items-center justify-between">
      <nav className="w-full flex screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 gap-5 items-center max-sm:hidden justify-center">
          {navLists.map((item) => (
            <div
              key={item}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img
            src={searchImg}
            className="cursor-pointer"
            alt="Search"
            width={18}
            height={18}
          />
          <img
            src={bagImg}
            className="cursor-pointer"
            alt="Bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
