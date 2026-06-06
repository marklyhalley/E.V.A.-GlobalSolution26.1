import { FlaskConical, Network, Sprout, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FasesTab() {
  const [searchParams] = useSearchParams();
  const faseParam = searchParams.get('fase');
  const [activeFase, setActiveFase] = useState(() => {
    const n = Number(faseParam);
    return Number.isInteger(n) && n >= 0 && n <= 3 ? n : 0;
  });
  const faseDetailRef = useRef(null);

  const fases = [
    {
      numero: '01',
      titulo: 'Desintoxicação',
      subtitulo: 'Redução de Toxicidade',
      icon: FlaskConical,
      color: '#993C1D',
      bgColor: 'from-[#993C1D]/10 to-transparent',
      borderColor: 'border-[#993C1D]/50',
      status: 'Concluído',
      statusColor: 'text-[#1D9E75]',
      progresso: 100,
      descricao: 'Uso de fungos Trichoderma e bactérias extremófilas para reduzir toxicidade e estabilizar o solo.',
      conteudo: `A Fase 1 representa o primeiro contato do sistema E.V.A. com o solo hostil. Nesta etapa crucial, utilizamos uma combinação estratégica de organismos extremófilos especialmente selecionados para suas capacidades únicas de desintoxicação.\n\nOs fungos Trichoderma são os protagonistas desta fase, conhecidos por sua extraordinária capacidade de absorver e metabolizar percloratos - compostos altamente tóxicos que dominam o regolito marciano. Estes fungos não apenas removem os percloratos, mas os convertem em compostos menos nocivos através de processos enzimáticos especializados.\n\nTrabalhando em sinergia, as bactérias extremófilas complementam o trabalho dos fungos, quebrando outros compostos tóxicos e criando um ambiente progressivamente mais hospitaleiro. Estas bactérias foram selecionadas por sua capacidade de sobreviver e prosperar em condições extremas de pH, temperatura e radiação.\n\nO resultado é impressionante: em apenas 120 horas (5 dias), conseguimos reduzir a toxicidade do solo em 87%, transformando um ambiente letal em um substrato viável para as próximas fases do processo.`,
      detalhes: [
        'Fungos Trichoderma absorvem e metabolizam percloratos',
        'Bactérias extremófilas quebram compostos tóxicos',
        'Redução de toxicidade de 87% em 120 horas',
        'Estabilização do pH entre 6.5-7.2',
        'Preparação do solo para colonização micorrízica',
        'Monitoramento contínuo via sensores IoT',
      ],
    },
    {
      numero: '02',
      titulo: 'Estruturação do Solo',
      subtitulo: 'Rede de Micélio',
      icon: Network,
      color: '#1D9E75',
      bgColor: 'from-[#1D9E75]/10 to-transparent',
      borderColor: 'border-[#1D9E75]/50',
      status: 'Ativo',
      statusColor: 'text-[#1D9E75]',
      progresso: 68,
      descricao: 'Desenvolvimento da rede de micélio (Pleurotus ostreatus) para aglomerar partículas e reter água.',
      conteudo: `A Fase 2 marca o início da verdadeira transformação estrutural do solo. Com a toxicidade reduzida, introduzimos o Pleurotus ostreatus, uma espécie de fungo com hifas robustas capazes de criar uma rede tridimensional complexa no solo.\n\nEsta rede de micélio funciona como um "sistema nervoso" do solo, conectando partículas dispersas de regolito e criando agregados estáveis. As hifas fúngicas secretam substâncias mucilaginosas que atuam como "cimento biológico", unindo partículas minerais e criando uma estrutura porosa mas coesa.\n\nUm dos benefícios mais notáveis desta fase é o aumento dramático na capacidade de retenção de água - um aumento de 340% comparado ao regolito não tratado. Isto é crucial tanto para Marte quanto para solos degradados na Terra, onde a gestão hídrica é um desafio constante.\n\nAlém disso, a rede de micélio cria milhares de canais microscópicos que permitem a circulação de ar e nutrientes, estabelecendo as condições necessárias para que plantas possam eventualmente se estabelecer no solo.`,
      detalhes: [
        'Micélio cria rede tridimensional no solo',
        'Aglomeração de partículas de regolito',
        'Retenção de água aumentada em 340%',
        'Criação de canais para circulação de ar e nutrientes',
        'Estabelecimento de estrutura física estável',
        'Base para simbiose com plantas na Fase 3',
      ],
    },
    {
      numero: '03',
      titulo: 'Nutrição e Regeneração',
      subtitulo: 'Simbiose Micorrízica',
      icon: Sprout,
      color: '#1D9E75',
      bgColor: 'from-[#1D9E75]/10 to-[#E1F5EE]/5',
      borderColor: 'border-[#1D9E75]/50',
      status: 'Ativo',
      statusColor: 'text-[#1D9E75]',
      progresso: 22,
      descricao: 'Simbiose micorrízica com plantas (Glomus/Rhizophagus) para troca de nutrientes e ciclos autossustentáveis.',
      conteudo: `A Fase 3 representa a culminação biológica do sistema E.V.A., onde estabelecemos relações simbióticas entre fungos micorrízicos (Glomus e Rhizophagus) e plantas pioneiras cuidadosamente selecionadas.\n\nEsta simbiose é uma das relações mais antigas e bem-sucedidas da natureza. Os fungos micorrízicos conectam-se intimamente às raízes das plantas, formando estruturas especializadas que permitem a troca eficiente de recursos. As plantas fornecem carboidratos produzidos pela fotossíntese, enquanto os fungos fornecem água e nutrientes minerais (especialmente fósforo e nitrogênio) que extraem do solo com eficiência muito superior às raízes sozinhas.\n\nO impacto é transformador: a área de absorção efetiva das raízes aumenta em até 1000%, permitindo que as plantas prosperem mesmo em condições de baixa disponibilidade de nutrientes. Isto é especialmente crucial em Marte, onde nutrientes orgânicos são essencialmente inexistentes no solo natural.\n\nCom esta fase, estabelecemos um ciclo autossustentável: as plantas produzem matéria orgânica, os fungos a decompõem e reciclam os nutrientes, e o sistema se torna progressivamente mais rico e complexo. É o nascimento de um verdadeiro ecossistema.`,
      detalhes: [
        'Fungos micorrízicos conectam-se às raízes das plantas',
        'Troca simbiótica: carbono por nutrientes minerais',
        'Expansão da área de absorção das raízes em 1000%',
        'Ciclo autossustentável de nutrientes estabelecido',
        'Introdução de plantas pioneiras adaptadas',
        'Início da produção de matéria orgânica no solo',
      ],
    },
    {
      numero: '04',
      titulo: 'Proteção e Estabilidade',
      subtitulo: 'Blindagem Radiológica',
      icon: Shield,
      color: '#533AB7',
      bgColor: 'from-[#533AB7]/10 to-[#FAC775]/5',
      borderColor: 'border-[#533AB7]/50',
      status: 'Planejado',
      statusColor: 'text-[#FAC775]',
      progresso: 0,
      descricao: 'Fungos radiotróficos (Cladosporium sphaerospermum) blindando o ecossistema contra radiação ionizante e frio extremo.',
      conteudo: `A Fase 4 é a camada final de proteção do ecossistema E.V.A., utilizando um dos organismos mais fascinantes da natureza: fungos radiotróficos, especialmente o Cladosporium sphaerospermum.\n\nDescobertos crescendo nas paredes do reator nuclear de Chernobyl, estes fungos possuem uma capacidade extraordinária: converter radiação ionizante em energia química através da melanina em suas células - um processo similar à fotossíntese, mas usando radiação em vez de luz visível.\n\nEm um ambiente marciano, onde a radiação cósmica e UV é uma ameaça constante devido à fina atmosfera e ausência de campo magnético forte, esta camada de fungos radiotróficos atua como uma "blindagem biológica viva". A melanina fúngica absorve e dissipa a radiação, protegendo as plantas e organismos do solo abaixo.\n\nAlém da proteção radiológica, esta camada fúngica também oferece isolamento térmico, ajudando a estabilizar a temperatura do solo e proteger contra as extremas variações térmicas marcianas. O resultado é um ecossistema robusto, auto-regenerativo e capaz de prosperar em condições que normalmente seriam letais para a vida.`,
      detalhes: [
        'Fungos radiotróficos convertem radiação em energia',
        'Melanina fúngica absorve radiação UV e cósmica',
        'Proteção térmica contra temperaturas extremas',
        'Camada biológica de blindagem auto-regenerativa',
        'Estabilização de longo prazo do ecossistema',
        'Monitoramento de radiação em tempo real',
      ],
    },
  ];

  useEffect(() => {
    const n = Number(faseParam);
    if (faseParam !== null && Number.isInteger(n) && n >= 0 && n <= 3) {
      setActiveFase(n);
      setTimeout(() => {
        faseDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [faseParam]);

  const currentFase = fases[activeFase];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Roadmap de <span className="text-[#1D9E75]">Fases</span> do E.V.A.
        </h2>
        <p className="text-[#a0a0a0]">
          Processo completo de transformação do regolito em ecossistema habitável
        </p>
      </div>

      <div className="bg-[#0f1422] border border-white/10 rounded-xl p-8">
        <div className="mb-6">
          <p className="text-sm text-[#a0a0a0] mb-4">FASE SELECIONADA</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {fases.map((fase, index) => (
              <button
                key={index}
                onClick={() => setActiveFase(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg transition-all cursor-pointer ${
                  activeFase === index
                    ? 'border-2'
                    : 'border border-white/10 hover:border-white/30'
                }`}
                style={{
                  borderColor: activeFase === index ? fase.color : undefined,
                  backgroundColor: activeFase === index ? `${fase.color}15` : 'transparent',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${fase.color}30` }}
                  >
                    <fase.icon className="w-5 h-5" style={{ color: fase.color }} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#a0a0a0]">Fase {fase.numero}</p>
                    <p className="text-sm font-medium text-white">{fase.titulo}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${fase.progresso}%`,
                            backgroundColor: fase.color,
                            boxShadow: fase.progresso > 0 ? `0 0 6px ${fase.color}60` : 'none',
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-mono" style={{ color: fase.color }}>{fase.progresso}%</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          ref={faseDetailRef}
          className={`bg-gradient-to-br ${currentFase.bgColor} border ${currentFase.borderColor} rounded-xl p-8`}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${currentFase.color}20` }}
              >
                <currentFase.icon className="w-8 h-8" style={{ color: currentFase.color }} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-4xl font-bold font-mono" style={{ color: currentFase.color }}>
                    {currentFase.numero}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentFase.titulo}</h3>
                    <p className="text-sm text-[#a0a0a0]">{currentFase.subtitulo}</p>
                  </div>
                </div>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-lg text-sm font-medium ${currentFase.statusColor}`}
              style={{ backgroundColor: `${currentFase.color}20` }}
            >
              {currentFase.status}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${currentFase.progresso}%`,
                  backgroundColor: currentFase.color,
                  boxShadow: currentFase.progresso > 0 ? `0 0 8px ${currentFase.color}60` : 'none',
                }}
              />
            </div>
            <span className="text-sm font-mono font-bold" style={{ color: currentFase.color, minWidth: '40px', textAlign: 'right' }}>
              {currentFase.progresso}%
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">Visão Geral</h4>
              <p className="text-[#E1F5EE]/80">{currentFase.descricao}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-3">Descrição Completa</h4>
              <div className="text-[#E1F5EE]/80 leading-relaxed space-y-4">
                {currentFase.conteudo.split('\n\n').map((paragrafo, index) => (
                  <p key={index}>{paragrafo}</p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-3">Características Principais</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentFase.detalhes.map((detalhe, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: currentFase.color }}
                    ></div>
                    <p className="text-sm text-[#E1F5EE]/70">{detalhe}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1D9E75]/10 via-[#533AB7]/10 to-[#993C1D]/10 border border-white/10 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Linha do Tempo Estimada</h3>
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#993C1D]/20 border-2 border-[#993C1D] flex items-center justify-center mx-auto mb-2">
              <span className="text-xl font-bold text-[#993C1D]">1</span>
            </div>
            <p className="text-xs text-[#a0a0a0]">0-5 dias</p>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#993C1D] to-[#1D9E75]"></div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#1D9E75]/20 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-2">
              <span className="text-xl font-bold text-[#1D9E75]">2</span>
            </div>
            <p className="text-xs text-[#a0a0a0]">5-15 dias</p>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#1D9E75] to-[#1D9E75]"></div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#1D9E75]/20 border-2 border-[#1D9E75] flex items-center justify-center mx-auto mb-2">
              <span className="text-xl font-bold text-[#1D9E75]">3</span>
            </div>
            <p className="text-xs text-[#a0a0a0]">15-30 dias</p>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#1D9E75] to-[#533AB7]"></div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#533AB7]/20 border-2 border-[#533AB7] flex items-center justify-center mx-auto mb-2">
              <span className="text-xl font-bold text-[#533AB7]">4</span>
            </div>
            <p className="text-xs text-[#a0a0a0]">30+ dias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
