import { useEffect, useState } from "react"; 
import myImage from "./assets/object.png"; 


export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-end items-center bg-background/90 backdrop-blur-md text-white border-b border-white/20">
        <nav className="space-x-6 text-sm font-light">
          <a href="#home" className="font-savate text-lg hover:underline">HOME</a>
          <a href="#about" className="font-savate text-lg hover:underline">ABOUT</a>
          <a href="#projects" className="font-savate text-lg hover:underline">PROJECTS</a>
          <a href="#contact" className="font-savate text-lg hover:underline">CONTACT</a>
        </nav>
      </header>   
    );
  }