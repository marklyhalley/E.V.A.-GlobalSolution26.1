import { Users, Target, Globe, Lightbulb } from 'lucide-react';

export default function SobreTab() {
  const ods = [
    {
      numero: 15,
      titulo: 'Vida Terrestre',
      descricao: 'Restauração de ecossistemas e prevenção da degradação do solo',
      icon: Globe,
      color: '#1D9E75',
    },
    {
      numero: 9,
      titulo: 'Indústria, Inovação e Infraestrutura',
      descricao: 'Tecnologia IoT e IA para soluções em ambientes extremos',
      icon: Lightbulb,
      color: '#533AB7',
    },
    {
      numero: 2,
      titulo: 'Fome Zero e Agricultura Sustentável',
      descricao: 'Segurança alimentar através da regeneração de solos',
      icon: Target,
      color: '#993C1D',
    },
  ];

  const equipe = [
    { nome: 'Gustavo Almeida Ferreira', cargo: 'RM 566980' },
    { nome: 'Lucas de Oliveira Miranda Caetano', cargo: 'RM 568036' },
    { nome: 'Marco Túlio Longo Conte', cargo: 'RM 568373' },
    { nome: 'Sofia Souza Rodrigues', cargo: 'RM 566708' },
    { nome: 'Camile Vitória Silva', cargo: 'RM 566649' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Sobre o <span className="text-[#1D9E75]">E.V.A.</span>
        </h2>
        <p className="text-[#a0a0a0] max-w-2xl mx-auto">
          Um projeto interdisciplinar que une biologia, tecnologia e inovação para criar
          ecossistemas sustentáveis na Terra e além
        </p>
      </div>

      <section className="bg-gradient-to-br from-[#1D9E75]/10 to-[#533AB7]/10 border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Nossa Missão</h3>
        <p className="text-[#E1F5EE]/80 text-lg leading-relaxed">
          Desenvolver um sistema biointeligente que aproveita a capacidade natural dos fungos
          micorrízicos, combinada com sensores IoT avançados e inteligência artificial, para
          regenerar solos degradados na Terra e viabilizar a criação de ecossistemas habitáveis
          em Marte. Nossa abordagem biomimética reconhece que a natureza já possui as soluções —
          nós apenas fornecemos a inteligência digital para otimizá-las.
        </p>
      </section>

      <section>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Compromisso com os <span className="text-[#1D9E75]">ODS</span>
          </h3>
          <p className="text-[#a0a0a0]">Objetivos de Desenvolvimento Sustentável da ONU</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ods.map((objetivo, index) => (
            <div
              key={index}
              className="bg-[#0f1422] border border-white/10 rounded-xl p-6 hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${objetivo.color}20` }}>
                  <objetivo.icon className="w-8 h-8" style={{ color: objetivo.color }} />
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${objetivo.color}30` }}>
                  <span className="text-2xl font-bold" style={{ color: objetivo.color }}>
                    {objetivo.numero}
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{objetivo.titulo}</h4>
              <p className="text-[#E1F5EE]/70 text-sm">{objetivo.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Users className="w-8 h-8 text-[#533AB7]" />
            <h3 className="text-2xl font-bold text-white">Nossa Equipe</h3>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipe.map((membro, index) => (
            <div
              key={index}
              className="bg-[#0f1422] border border-white/10 rounded-xl p-6 hover:border-[#1D9E75]/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1D9E75]/20 to-[#533AB7]/20 flex items-center justify-center border border-white/10">
                  <Users className="w-8 h-8 text-[#E1F5EE]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">{membro.nome}</h4>
                  <p className="text-sm text-[#1D9E75]">{membro.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#533AB7]/10 to-[#993C1D]/10 border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Tecnologias Utilizadas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Fungos Micorrízicos',
            'Sensores IoT',
            'Machine Learning',
            'Biologia Sintética',
            'Análise Preditiva',
            'Redes Neurais',
            'Bioengenharia',
            'Computação em Nuvem',
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-[#0f1422] border border-white/10 rounded-lg p-4 text-center hover:border-[#1D9E75]/50 transition-all"
            >
              <p className="text-[#E1F5EE] text-sm">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <div className="bg-gradient-to-br from-[#1D9E75]/10 to-transparent border border-[#1D9E75]/30 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-4">Visão para o Futuro</h3>
          <p className="text-[#E1F5EE]/80 max-w-3xl mx-auto">
            Acreditamos que a colonização espacial sustentável só é possível através da
            biomimética e da cooperação entre sistemas naturais e tecnológicos. O E.V.A.
            é o primeiro passo de uma nova era onde a vida se adapta, se regenera e prospera
            — seja na Terra ou entre as estrelas.
          </p>
        </div>
      </section>
    </div>
  );
}
