import React from 'react';
import { 
  Scissors, 
  CheckCircle, 
  Zap, 
  Beer, 
  Clock, 
  Smartphone, 
  ArrowRight,
  UserCheck,
  Star
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 rounded-full text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
             Desde 2018 | Referência em Sorocaba
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight tracking-tighter">
            Muito mais que um <span className="text-gradient-gold">corte</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Barbearia premium especializada no cuidado do homem moderno. Ambiente sofisticado, atendimento personalizado e os melhores produtos do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a 
              href="https://wa.me/15991234567" 
              className="bg-gold text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-gold-light transition-all hover:scale-105 shadow-2xl shadow-gold/20"
            >
              AGENDAR AGORA <Smartphone size={24} />
            </a>
            <a 
              href="#servicos" 
              className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all"
            >
              VER SERVIÇOS
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Beer size={32} />, title: "Craft Beer", desc: "Cerveja artesanal cortesia enquanto aguarda." },
            { icon: <UserCheck size={32} />, title: "Personalizado", desc: "Atendimento 100% focado no seu estilo." },
            { icon: <Clock size={32} />, title: "Sem Fila", desc: "Agendamento online rápido e pontual." },
            { icon: <Star size={32} />, title: "Premium", desc: "Produtos importados de alta qualidade." },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className="w-16 h-16 bg-gold/10 rounded-3xl flex items-center justify-center text-gold mx-auto group-hover:bg-gold group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-gold font-black uppercase tracking-[0.3em] text-sm">Cardápio de Serviços</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">O Estilo <span className="text-gold">Dom Ricardo</span></h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Corte Masculino", price: "R$ 60", desc: "Clássico ou moderno, tesoura ou máquina." },
              { name: "Barba Completa", price: "R$ 50", desc: "Navalha, toalha quente e massagem facial." },
              { name: "Combo Corte + Barba", price: "R$ 100", desc: "O cuidado completo que você merece." },
              { name: "Hidratação Capilar", price: "R$ 40", desc: "Tratamento profundo para fios ressecados." },
              { name: "Pigmentação", price: "R$ 30", desc: "Correção de falhas e realce do contorno." },
              { name: "Day Use Noivo", price: "R$ 250", desc: "Corte, barba, hidratação, sobrancelha e relaxamento." },
            ].map((service, idx) => (
              <div key={idx} className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl space-y-6 hover:border-gold/30 transition-all group">
                <div className="flex justify-between items-start">
                  <h4 className="text-2xl font-bold uppercase w-1/2">{service.name}</h4>
                  <span className="text-gold font-black text-2xl">{service.price}</span>
                </div>
                <p className="text-white/40 text-sm">{service.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-gold font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Reservar <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gold-gradient rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <h2 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter relative z-10">Agende seu horário em 30 segundos</h2>
          <p className="text-black/70 text-xl font-bold max-w-2xl mx-auto relative z-10 leading-relaxed uppercase tracking-widest">
            A melhor experiência de barbearia da sua vida te espera em Sorocaba.
          </p>
          <div className="pt-6 relative z-10">
            <a href="https://wa.me/15991234567" className="bg-black text-gold px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
