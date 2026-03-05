import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <Scissors className="text-black" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            Dom <span className="text-gold">Ricardo</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-white/70">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/sobre" className="hover:text-gold transition-colors">Sobre</Link>
          <Link href="/contato" className="hover:text-gold transition-colors">Contato</Link>
        </div>

        <a 
          href="https://wa.me/15991234567" 
          target="_blank"
          className="bg-gold hover:bg-gold-light text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all hover:scale-105"
        >
          Agendar Agora
        </a>
      </div>
    </nav>
  );
}
