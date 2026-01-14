import {
SignedIn,
SignedOut,
SignInButton,
UserButton,
}from"@clerk/clerk-react"
import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3.5 lg:px-14">
      <div>
        <span className="font-extrabold text-2xl text-red-500">
       StreetRiders<span className="text-black">.</span>
        </span>
      </div>

      <nav className=" hidden lg:flex gap-8">
        <a href="/" className=" font-medium hover:text-red-500 transition-all">Home</a>
        <a href="/" className=" font-medium hover:text-red-500 transition-all">About Us</a>
        <a href="/" className=" font-medium hover:text-red-500 transition-all">Our Car</a>
        <a href="/" className=" font-medium hover:text-red-500 transition-all">Pricing</a>
        <a href="/" className=" font-medium hover:text-red-500 transition-all">Blog</a>
        <a href="/" className=" font-medium hover:text-red-500 transition-all">Contact Us</a>
      </nav>

      <SignedOut>
        <SignInButton>
            <button className="bg-red-500 text-white px-5 py-1 rounded">Login</button>
        </SignInButton>
        </SignedOut>

        <SignedIn>
            <UserButton/>
        </SignedIn>
       
    </header>
     
  );
};

export default Navbar;
