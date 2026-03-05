import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <Scissors className="text-black" size={18} />
            </div>
            <span className="text-lg font-bold text-white uppercase">Dom <span className="text-gold">Ricardo</span></span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Barbearia premium em Sorocaba especializada em cortes masculinos clássicos e modernos. Referência em cuidado masculino.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="/" className="hover:text-gold transition-colors">Página Inicial</a></li>
            <li><a href="/sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
            <li><a href="/contato" className="hover:text-gold transition-colors">Contato</a></li>
            <li><a href="https://wa.me/15991234567" className="hover:text-gold transition-colors">Agendamento</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0" /> Sorocaba, SP</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /> (15) 99123-4567</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /> contato@domricardo.com.br</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Horários</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li className="flex justify-between"><span>Seg - Sex:</span> <span>09h às 20h</span></li>
            <li className="flex justify-between"><span>Sábado:</span> <span>09h às 18h</span></li>
            <li className="flex justify-between"><span>Domingo:</span> <span>Fechado</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gold/5 pt-10 text-center text-[10px] uppercase tracking-widest text-white/20">
        &copy; 2024 Barbearia Dom Ricardo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
