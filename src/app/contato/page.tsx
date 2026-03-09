import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Smartphone, ArrowRight } from 'lucide-react';

export default function Contato() {
  return (
    <div className="pt-40 min-h-screen bg-background">
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs italic">Reserve seu momento</h2>
              <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.8] font-serif">
                Estamos <br /> <span className="text-gradient-gold italic">te esperando</span>
              </h1>
              <p className="text-foreground/40 text-lg md:text-xl max-w-md font-light leading-relaxed pt-6">
                Agende seu horário ou tire suas dúvidas com nossa equipe de especialistas. Atendimento premium em Sorocaba.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: <MapPin size={24} className="text-gold" />, label: "Onde estamos", value: "Av. Barão de Tatuí, 1234 - Sorocaba, SP" },
                { icon: <Smartphone size={24} className="text-gold" />, label: "Agendamento VIP", value: "(15) 99123-4567" },
                { icon: <Mail size={24} className="text-gold" />, label: "E-mail Corporativo", value: "contato@domricardo.com.br" },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:scale-110 shadow-xl shadow-black/5 group-hover:shadow-gold/20">
                    <div className="group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div className="space-y-2 pt-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">{item.label}</p>
                    <p className="text-2xl font-bold text-foreground font-serif tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Siga nossa jornada</p>
              <div className="flex gap-8">
                <a href="#" className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-foreground/40 hover:text-gold hover:border-gold/30 transition-all hover:scale-110"><Instagram size={28} /></a>
                <a href="#" className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-foreground/40 hover:text-gold hover:border-gold/30 transition-all hover:scale-110"><Facebook size={28} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative group">
             {/* Decorative Background for Card */}
            <div className="absolute -inset-1 bg-gold-gradient rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl space-y-12 border border-black/5 overflow-hidden">
              {/* Noise overlay for form card */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-4xl font-bold uppercase tracking-tighter font-serif">Mensagem <br /><span className="text-gold italic">Direta</span></h3>
                <div className="w-12 h-[2px] bg-gold"></div>
              </div>

              <form className="space-y-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-background border-b border-black/10 px-4 py-4 outline-none focus:border-gold transition-colors text-foreground font-light text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="w-full bg-background border-b border-black/10 px-4 py-4 outline-none focus:border-gold transition-colors text-foreground font-light text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-2">Sua Mensagem</label>
                  <textarea 
                    rows={4} 
                    placeholder="Como podemos ajudar você hoje?"
                    className="w-full bg-background border-b border-black/10 px-4 py-4 outline-none focus:border-gold transition-colors text-foreground font-light text-lg resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="group w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-black transition-all duration-500 shadow-2xl hover:shadow-gold/20 flex items-center justify-center gap-4 active:scale-95"
                >
                  Enviar Solicitação <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-[600px] w-full bg-primary relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 grayscale scale-110 pointer-events-none">
             {/* Abstract Pattern as Map Placeholder */}
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-xl px-6">
            <h2 className="text-white text-3xl font-bold uppercase tracking-tighter font-serif">Nossa Localização</h2>
            <p className="text-white/40 font-light text-lg leading-relaxed">
                Estamos estrategicamente localizados para oferecer o melhor acesso e conforto para o homem moderno.
            </p>
            <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-3 text-gold font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-colors">
                Abrir no Google Maps <ArrowRight size={14} />
            </a>
        </div>
      </section>
    </div>
  );
}
