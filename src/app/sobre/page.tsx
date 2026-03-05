import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold opacity-10 blur-2xl group-hover:opacity-20 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074" 
              alt="Barbearia Dom Ricardo" 
              className="relative rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-gold font-black uppercase tracking-[0.3em] text-sm italic">Nossa História</h2>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
              Excelência e <span className="text-gradient-gold">Tradição</span>
            </h1>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                A Barbearia Dom Ricardo nasceu da paixão pelo cuidado masculino e pela vontade de oferecer um serviço que vai muito além de apenas cortar cabelo. Localizada no coração de Sorocaba, nos tornamos referência em sofisticação e técnica, unindo o clássico ao contemporâneo.
              </p>
              <p>
                Nossa missão é resgatar a tradição das barbearias clássicas — com toalha quente e navalha — integrando o que há de mais moderno em tendências e tratamentos. Aqui, cada cliente é único e recebe um atendimento totalmente personalizado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Ambiente Premium",
                "Produtos Importados",
                "Cerveja Artesanal",
                "Música Ambiente",
                "Wi-fi de Alta Velocidade",
                "Estacionamento"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/80">
                  <CheckCircle size={18} className="text-gold" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE OR PHILOSOPHY */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center space-y-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">O Homem Dom Ricardo</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto">
              Nossa filosofia é baseada no respeito à individualidade e na busca constante pela perfeição.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { title: "Visão", text: "Ser a maior e melhor rede de barbearias premium do interior paulista." },
              { title: "Valores", text: "Honestidade, respeito, excelência técnica e atendimento humano." },
              { title: "Propósito", text: "Elevar a autoestima do homem através do cuidado estético profissional." },
            ].map((box, i) => (
              <div key={i} className="bg-black border border-white/5 p-10 rounded-3xl space-y-6">
                <h3 className="text-gold font-black uppercase text-2xl tracking-tighter">{box.title}</h3>
                <p className="text-white/50 leading-relaxed">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
