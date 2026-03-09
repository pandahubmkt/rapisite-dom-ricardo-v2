import React from 'react';
import { 
  Beer, 
  Clock, 
  ArrowRight,
  UserCheck,
  Star,
  Smartphone
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with optimized Next.js Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070"
            alt="Barbearia Dom Ricardo Hero"
            fill
            priority
            className="object-cover object-center scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]"></div>
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-10">
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 px-6 py-2 rounded-full text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">
             <span className="animate-pulse">●</span> Desde 2018 | Referência em Sorocaba
          </div>
          <h1 className="text-6xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tighter font-serif">
            Estilo <br /> <span className="text-gradient-gold italic">& Tradição</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-sans font-light tracking-wide">
            Barbearia premium especializada no cuidado do homem moderno. Ambiente sofisticado, atendimento exclusivo e os melhores produtos do mercado mundial.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <a 
              href="https://wa.me/5515991234567" 
              className="group bg-gold text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold-light transition-all hover:scale-105 shadow-2xl shadow-gold/20 active:scale-95"
            >
              Agendar Experiência <Smartphone size={18} className="group-hover:translate-y-[-2px] transition-transform" />
            </a>
            <a 
              href="#servicos" 
              className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all active:scale-95"
            >
              Ver Cardápio
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Scroll</p>
          <div className="w-[1px] h-16 bg-linear-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-40 px-6 bg-background relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          {[
            { icon: <Beer size={28} />, title: "Craft Beer", desc: "Cerveja artesanal cortesia enquanto você relaxa." },
            { icon: <UserCheck size={28} />, title: "Exclusividade", desc: "Atendimento 100% personalizado e sem filas." },
            { icon: <Clock size={28} />, title: "Pontualidade", desc: "Agendamento rápido em apenas 30 segundos." },
            { icon: <Star size={28} />, title: "Qualidade", desc: "Produtos importados e técnicas avançadas." },
          ].map((item, idx) => (
            <div key={idx} className="space-y-6 group cursor-default">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-gold border border-white/5 shadow-xl transition-all duration-500 group-hover:bg-gold group-hover:text-black group-hover:translate-y-[-10px]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest font-serif">{item.title}</h3>
              <p className="text-foreground/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-40 px-6 bg-primary relative overflow-hidden text-white">
        {/* Background Decoration */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-28 space-y-6">
            <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs">Exclusividade em cada detalhe</h2>
            <h3 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter font-serif leading-none">O Cardápio <br /> <span className="text-gold italic">Premium</span></h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Corte Masculino", price: "R$ 60", desc: "Clássico ou moderno, tesoura ou máquina. Lavagem inclusa." },
              { name: "Barba Completa", price: "R$ 50", desc: "Ritual com toalha quente, navalha e massagem facial." },
              { name: "Combo Corte + Barba", price: "R$ 100", desc: "A experiência completa para seu visual renovado." },
              { name: "Hidratação Capilar", price: "R$ 40", desc: "Tratamento profundo para fios saudáveis e alinhados." },
              { name: "Pigmentação", price: "R$ 30", desc: "Correção natural de falhas e realce de contorno." },
              { name: "Day Use Noivo", price: "R$ 250", desc: "Corte, barba, tratamentos e lounge exclusivo para você e seus padrinhos." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white/[0.02] backdrop-blur-sm border border-white/5 p-10 rounded-[2.5rem] space-y-8 hover:border-gold/40 transition-all duration-500 group cursor-pointer">
                <div className="flex justify-between items-start">
                  <h4 className="text-2xl font-bold uppercase w-1/2 leading-tight font-serif">{service.name}</h4>
                  <span className="text-gold font-bold text-2xl tracking-tighter">{service.price}</span>
                </div>
                <p className="text-white/40 text-sm font-light leading-relaxed">{service.desc}</p>
                <div className="pt-6 flex items-center gap-3 text-gold font-black uppercase text-[10px] tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                  Agendar <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="py-40 px-6 bg-background">
        <div className="max-w-7xl mx-auto bg-gold-gradient rounded-[4rem] p-16 md:p-32 text-center space-y-10 relative overflow-hidden shadow-3xl">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <h2 className="text-5xl md:text-8xl font-bold text-black uppercase tracking-tighter relative z-10 font-serif leading-[0.9]">
            Renove sua <br /> <span className="italic">Autoestima</span>
          </h2>
          <p className="text-black/70 text-lg md:text-2xl font-medium max-w-2xl mx-auto relative z-10 leading-relaxed font-sans tracking-wide">
            Não perca tempo em filas. Garanta seu momento de cuidado na melhor barbearia de Sorocaba em apenas 30 segundos.
          </p>
          <div className="pt-10 relative z-10">
            <a 
              href="https://wa.me/5515991234567" 
              className="inline-block bg-black text-gold px-16 py-7 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl hover:shadow-black/40 active:scale-95"
            >
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
