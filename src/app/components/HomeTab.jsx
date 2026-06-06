import { AlertTriangle, Globe, Radiation, Sprout, Cpu, Wifi, ArrowRight, Star } from 'lucide-react';
import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  opacity: Math.random() * 0.7 + 0.15,
  speed: Math.random() * 0.04 + 0.01,
}));

export default function HomeTab() {
  const navigate = useNavigate();
  const starsRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (e.clientX - rect.left - cx) / cx;
    const dy = (e.clientY - rect.top - cy) / cy;

    if (starsRef.current) {
      starsRef.current.style.transform = `scale(1.18) translate(${dx * -18}px, ${dy * -18}px)`;
    }
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${dx * 12}px, ${dy * 12}px)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (starsRef.current) starsRef.current.style.transform = 'scale(1) translate(0,0)';
    if (glowRef.current) glowRef.current.style.transform = 'translate(0,0)';
  }, []);

  return (
    <div className="space-y-24">

      <section
        className="relative text-center py-28 overflow-hidden rounded-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ minHeight: '520px' }}
      >
        <div
          ref={starsRef}
          className="absolute inset-0 pointer-events-none"
          style={{ transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)', willChange: 'transform' }}
        >
          {STARS.map(star => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size + 'px',
                height: star.size + 'px',
                top: star.y + '%',
                left: star.x + '%',
                opacity: star.opacity,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={'glow' + i}
              className="absolute rounded-full"
              style={{
                width: (Math.random() * 3 + 2) + 'px',
                height: (Math.random() * 3 + 2) + 'px',
                top: (10 + i * 11) + '%',
                left: (5 + i * 12) + '%',
                opacity: 0.9,
                backgroundColor: i % 2 === 0 ? '#1D9E75' : '#533AB7',
                boxShadow: i % 2 === 0 ? '0 0 6px #1D9E75' : '0 0 6px #533AB7',
              }}
            />
          ))}
        </div>

        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none"
          style={{ transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.07) 0%, rgba(83,58,183,0.05) 50%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1D9E75]/30 bg-[#1D9E75]/10 text-[#1D9E75] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
            Sistema Ativo · Missão Marte 2031
          </div>

          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            O Sistema Imunológico<br />
            <span className="bg-gradient-to-r from-[#1D9E75] via-[#533AB7] to-[#1D9E75] bg-clip-text text-transparent">
              Digital para Ecossistemas
            </span>
          </h1>

          <p className="text-xl text-[#E1F5EE]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            A união revolucionária de fungos micorrízicos, sensores IoT e inteligência artificial
            para regenerar solos na Terra e viabilizar a colonização de Marte.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1D9E75] text-white font-semibold text-base hover:bg-[#17836100] hover:border-[#1D9E75] border border-transparent hover:text-[#1D9E75] transition-all cursor-pointer"
              style={{ backgroundColor: '#1D9E75' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1D9E75'; }}
            >
              Explore o Dashboard <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/fases')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/80 font-semibold text-base hover:border-white/40 hover:text-white transition-all cursor-pointer"
            >
              Ver Roadmap de Fases
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-8 hover:border-[#1D9E75]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1D9E75]/20 flex items-center justify-center mb-5 group-hover:bg-[#1D9E75]/30 transition-all">
              <Sprout className="w-6 h-6 text-[#1D9E75]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Rede Fúngica</h3>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">Fungos micorrízicos e radiotróficos criam um ecossistema vivo e autossustentável capaz de sobreviver em condições extremas.</p>
          </div>
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-8 hover:border-[#533AB7]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#533AB7]/20 flex items-center justify-center mb-5 group-hover:bg-[#533AB7]/30 transition-all">
              <Wifi className="w-6 h-6 text-[#533AB7]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Sensores IoT</h3>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">24 sensores em tempo real monitoram pH, umidade, radiação e toxicidade, alimentando um loop de decisão contínuo.</p>
          </div>
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-8 hover:border-[#FAC775]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FAC775]/20 flex items-center justify-center mb-5 group-hover:bg-[#FAC775]/30 transition-all">
              <Cpu className="w-6 h-6 text-[#FAC775]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Inteligência Artificial</h3>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">Agente IA analisa dados dos sensores e do micélio para ajustar automaticamente cada fase do processo de regeneração.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            O <span className="text-[#993C1D]">Problema</span>
          </h2>
          <p className="text-[#a0a0a0] max-w-xl mx-auto">Dois mundos, um mesmo desafio: solos que não sustentam vida</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#993C1D]/10 to-transparent border border-[#993C1D]/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#993C1D]/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#993C1D]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Na Terra</h3>
            </div>
            <ul className="space-y-3 text-[#E1F5EE]/80">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#993C1D] mt-0.5 flex-shrink-0" />
                <span>Degradação acelerada de solos férteis por agricultura intensiva</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#993C1D] mt-0.5 flex-shrink-0" />
                <span>Perda crítica de biodiversidade e colapso de ecossistemas</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#993C1D] mt-0.5 flex-shrink-0" />
                <span>Desertificação progressiva e redução da capacidade produtiva</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#993C1D]/10 to-transparent border border-[#993C1D]/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#993C1D]/20 flex items-center justify-center">
                <Radiation className="w-6 h-6 text-[#993C1D]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Em Marte</h3>
            </div>
            <ul className="space-y-3 text-[#E1F5EE]/80">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#993C1D] mt-0.5 flex-shrink-0" />
                <span>Solo hostil (regolito) com alta concentração de percloratos tóxicos</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#993C1D] mt-0.5 flex-shrink-0" />
                <span>Radiação cósmica e UV sem proteção atmosférica adequada</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#993C1D] mt-0.5 flex-shrink-0" />
                <span>Ausência total de nutrientes orgânicos e estrutura para vida</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(83,58,183,0.15) 0%, rgba(29,158,117,0.10) 50%, rgba(83,58,183,0.08) 100%)' }} />
        <div className="absolute inset-0 border border-white/10 rounded-2xl" />
        <div className="relative z-10 p-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-[#FAC775]" />
            <span className="text-sm text-[#FAC775] font-medium">Dome Inteligente E.V.A.</span>
            <Star className="w-4 h-4 text-[#FAC775]" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Vida onde não deveria existir
          </h3>
          <p className="text-[#E1F5EE]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Um ecossistema biointeligente autogerenciado que combina redes fúngicas,
            sensores IoT e análise por IA para criar ambientes habitáveis e produtivos
            em condições extremas — na Terra ou em Marte.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1D9E75]/20 border border-[#1D9E75]/50 text-[#1D9E75] hover:bg-[#1D9E75]/30 transition-all font-semibold cursor-pointer"
          >
            Explore o Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
