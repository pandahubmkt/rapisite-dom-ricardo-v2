import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Sobre() {
  return (
    <div className="pt-40 min-h-screen bg-background">
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gold opacity-10 blur-3xl group-hover:opacity-20 transition-all duration-700"></div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-black/5 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074" 
                alt="Ambiente Barbearia Dom Ricardo" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold-gradient rounded-full -z-10 blur-2xl opacity-20"></div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-gold font-black uppercase tracking-[0.4em] text-xs">Excelência em cada detalhe</h2>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] font-serif">
                Estilo & <span className="text-gradient-gold italic">Tradição</span>
              </h1>
            </div>
            
            <div className="space-y-8 text-foreground/60 text-lg leading-relaxed font-light">
              <p>
                A <span className="text-foreground font-medium">Barbearia Dom Ricardo</span> nasceu do desejo de elevar o padrão do cuidado masculino em Sorocaba. Entendemos que o homem moderno busca não apenas um corte impecável, mas um refúgio de sofisticação e pausa em sua rotina.
              </p>
              <p>
                Unimos o ritual clássico da barbearia — navalha afiada, toalha quente e precisão — às técnicas contemporâneas de visagismo. Em nosso espaço, a tradição encontra a inovação para revelar a melhor versão de cada cliente que confia em nosso olhar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 pt-6">
              {[
                "Ambiente Premium",
                "Produtos Importados",
                "Cerveja Artesanal",
                "Música Selecionada",
                "Cuidado Exclusivo",
                "Foco no Detalhe"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80 group cursor-default">
                  <CheckCircle size={16} className="text-gold group-hover:scale-110 transition-transform" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-40 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center space-y-32 relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter font-serif leading-none">O Homem <br /> <span className="text-gold italic">Dom Ricardo</span></h2>
            <p className="text-white/40 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              Nossa filosofia é baseada no respeito à individualidade e na busca incessante pela perfeição técnica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 text-left">
            {[
              { title: "Nossa Visão", text: "Ser a maior e melhor referência em barbearia de luxo no interior paulista, elevando o padrão do mercado." },
              { title: "Nossos Valores", text: "Ética, transparência, excelência técnica e o compromisso inabalável com o conforto do nosso cliente." },
              { title: "Nosso Propósito", text: "Transformar o visual e elevar a autoestima do homem através de um atendimento de elite e personalizado." },
            ].map((box, i) => (
              <div key={i} className="space-y-8 group">
                <div className="w-12 h-[2px] bg-gold transition-all duration-500 group-hover:w-full"></div>
                <h3 className="text-gold font-bold uppercase text-2xl tracking-tighter font-serif">{box.title}</h3>
                <p className="text-white/50 leading-relaxed font-light text-lg">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
