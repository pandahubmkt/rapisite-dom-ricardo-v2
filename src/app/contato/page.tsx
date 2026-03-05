import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Smartphone } from 'lucide-react';

export default function Contato() {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-gold font-black uppercase tracking-[0.3em] text-sm">Fale Conosco</h2>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                Estamos <br /> <span className="text-gradient-gold">te esperando</span>
              </h1>
              <p className="text-white/40 text-xl max-w-md">
                Dúvidas, parcerias ou agendamentos especiais? Nossa equipe está pronta para te atender.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <MapPin className="text-gold" />, label: "Endereço", value: "Av. Principal, 1234 - Sorocaba, SP" },
                { icon: <Phone className="text-gold" />, label: "Telefone", value: "(15) 99123-4567" },
                { icon: <Mail className="text-gold" />, label: "E-mail", value: "contato@domricardo.com.br" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-gold/10">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-black uppercase tracking-widest text-white/30">{item.label}</p>
                    <p className="text-xl font-bold text-white/90">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">Siga-nos</p>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={32} /></a>
                <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={32} /></a>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] border border-white/5 p-10 md:p-16 rounded-[3rem] space-y-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-colors text-white resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gold text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold-light transition-all shadow-xl shadow-gold/20"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-[500px] w-full bg-[#0a0a0a] grayscale opacity-50 contrast-125 border-y border-white/5">
        <div className="w-full h-full flex items-center justify-center text-white/10 italic">
          [ Integração com Google Maps aqui ]
        </div>
      </section>
    </div>
  );
}
