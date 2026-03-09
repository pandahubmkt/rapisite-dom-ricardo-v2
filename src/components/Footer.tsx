import { Scissors, Instagram, Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8 col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20">
                <Scissors className="text-black" size={20} />
              </div>
              <span className="text-2xl font-bold text-white uppercase font-serif tracking-tighter">Dom <span className="text-gold">Ricardo</span></span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Elevando o padrão do cuidado masculino em Sorocaba. Tradição, estilo e exclusividade em cada atendimento.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all hover:scale-110">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all hover:scale-110">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-10">Navegação</h4>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-widest text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group">Home <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors flex items-center gap-2 group">A Barbearia <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors flex items-center gap-2 group">Contato <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></Link></li>
              <li><a href="https://wa.me/5515991234567" className="text-gold hover:text-white transition-colors flex items-center gap-2 group">Agendar Horário <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-10">Canais de Contato</h4>
            <ul className="space-y-6 text-sm font-light text-white/40">
              <li className="flex gap-4 group cursor-default">
                <MapPin size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-white transition-colors">Sorocaba, SP</span>
              </li>
              <li className="flex gap-4 group cursor-default">
                <Phone size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-white transition-colors">(15) 99123-4567</span>
              </li>
              <li className="flex gap-4 group cursor-default">
                <Mail size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-white transition-colors">contato@domricardo.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-10">Horário Nobre</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Ter - Sex</span> <span className="text-white">09h às 20h</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Sábado</span> <span className="text-white">08h às 18h</span></li>
              <li className="flex justify-between pb-2"><span>Dom - Seg</span> <span className="text-gold">Privado</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
            &copy; 2024 Barbearia Dom Ricardo. <span className="hidden md:inline">Todos os direitos reservados.</span>
          </p>
          <div className="flex items-center gap-2 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Crafted by</p>
             <span className="text-xs font-black tracking-tighter text-white">Rapi<span className="text-gold">Site</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
