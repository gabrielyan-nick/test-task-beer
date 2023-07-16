import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-headerWidth md:w-[684px] z-10 flex items-center justify-center bg-amber-100 h-[70px]">
      <h1 className="text-center text-gray-900 font-header text-3xl">Brewtiful Recipes</h1>
    </header>
  );
};

export default Header;
