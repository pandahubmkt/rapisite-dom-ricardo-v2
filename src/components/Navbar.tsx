'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl h-20 transition-all duration-500 rounded-full flex items-center justify-between px-8 border border-white/10 ${scrolled ? 'navbar-scrolled' : 'bg-black/20 backdrop-blur-sm'}`}>
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-gold/20">
          <Scissors className="text-black" size={20} />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white uppercase font-serif">
          Dom <span className="text-gold">Ricardo</span>
        </span>
      </Link>
      
      <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <Link href="/sobre" className="hover:text-gold transition-colors">A Barbearia</Link>
        <Link href="/contato" className="hover:text-gold transition-colors">Contato</Link>
      </div>

      <a 
        href="https://wa.me/5515991234567" 
        target="_blank"
        className="bg-gold hover:bg-gold-light text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gold/10"
      >
        Agendar
      </a>
    </nav>
  );
}
