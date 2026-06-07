import { FlaskConical, Network, Sprout, Shield, Rocket } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FasesTab() {
  const [searchParams] = useSearchParams();
  const faseParam = searchParams.get('fase');
  const [activeFase, setActiveFase] = useState(() => {
    const n = Number(faseParam);
    return Number.isInteger(n) && n >= 0 && n <= 4 ? n : 0;
  });
  const faseDetailRef = useRef(null);

  const fases = [
    {
      numero: '00',
      titulo: 'Transporte da Carga Biológica',
      subtitulo: 'Pré-Missão · SpaceX Dragon Capsule',
      icon: Rocket,
      color: '#B87D2A',
      bgColor: 'from-[#FAC775]/10 to-[#B87D2A]/5',
      borderColor: 'border-[#FAC775]/40',
      status: 'Concluído',
      statusColor: 'text-[#FAC775]',
      progresso: 100,
      imagem: '/images/fases/fase0.png',
      imagemAlt: 'Câmaras criogênicas contendo culturas fúngicas luminosas de cor âmbar a bordo de uma nave espacial, com Marte visível ao fundo pela janela',
      descricao: 'Transporte dos consórcios fúngicos da Terra até Marte a bordo da cápsula Dragon, com monitoramento IoT contínuo de 6 parâmetros críticos para viabilidade biológica.',
      conteudo: `A Fase 0 é a precondição de toda a missão E.V.A.: antes que qualquer fungo possa atuar no solo marciano, ele precisa chegar lá vivo e viável. Os consórcios fúngicos selecionados — Trichoderma, Pleurotus, Glomus e Cladosporium — são acondicionados em câmaras criogênicas herméticas e embarcados na cápsula SpaceX Dragon para a viagem de aproximadamente 7 meses até Marte.

Durante todo o trajeto, um sistema de telemetria IoT embarcado com ESP32 monitora em tempo real 6 parâmetros ambientais críticos para a viabilidade dos fungos. O firmware coleta dados a cada 3 segundos e os transmite via protocolo MQTT (TLS) para o broker HiveMQ Cloud, que os disponibiliza para o sistema de controle em Terra.

Quando qualquer parâmetro ultrapassa os limiares de segurança pré-configurados, o sistema aciona alertas visuais (LEDs verde/amarelo/vermelho) e sonoros (buzzer) imediatamente. Toda a telemetria é registrada em tempo real e exibida no dashboard de monitoramento da missão.

Qualquer falha nesta fase compromete toda a missão: sem fungos viáveis, não há desintoxicação, não há estruturação do solo, não há ecossistema marciano. É por isso que o monitoramento contínuo desta fase não é opcional — é a fundação de tudo que vem depois.`,
      detalhes: [
        'Temperatura: 4–25°C para sobrevivência dos esporos fúngicos',
        'Umidade relativa: acima de 30% para evitar dessecação',
        'Pressão atmosférica: 0,9–1,1 atm para integridade das câmaras',
        'Radiação ionizante: abaixo de 10 µSv/h para proteção dos inóculos',
        'Concentração de O₂: acima de 19,5% para aerobiose controlada',
        'Aceleração estrutural: abaixo de 2G para evitar dano mecânico',
      ],
      iotInfo: {
        hardware: 'ESP32 DevKit V1 + DHT22 + sensores analógicos',
        protocolo: 'MQTT over TLS (porta 8883)',
        broker: 'HiveMQ Cloud',
        topico: 'dragon/telemetry/full',
        intervalo: '3 segundos',
      },
    },
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
      imagem: '/images/fases/fase1.png',
      imagemAlt: 'Filamentos de micélio verde bioluminescente atacando e dissolvendo compostos tóxicos de perclorato cor laranja-vermelho no regolito marciano escuro',
      descricao: 'Uso de fungos Trichoderma e bactérias extremófilas para reduzir toxicidade e estabilizar o solo.',
      conteudo: `A Fase 1 representa o primeiro contato do sistema E.V.A. com o solo hostil. Nesta etapa crucial, utilizamos uma combinação estratégica de organismos extremófilos especialmente selecionados para suas capacidades únicas de desintoxicação.

Os fungos Trichoderma são os protagonistas desta fase, conhecidos por sua extraordinária capacidade de absorver e metabolizar percloratos - compostos altamente tóxicos que dominam o regolito marciano. Estes fungos não apenas removem os percloratos, mas os convertem em compostos menos nocivos através de processos enzimáticos especializados.

Trabalhando em sinergia, as bactérias extremófilas complementam o trabalho dos fungos, quebrando outros compostos tóxicos e criando um ambiente progressivamente mais hospitaleiro. Estas bactérias foram selecionadas por sua capacidade de sobreviver e prosperar em condições extremas de pH, temperatura e radiação.

O resultado é impressionante: em apenas 120 horas (5 dias), conseguimos reduzir a toxicidade do solo em 87%, transformando um ambiente letal em um substrato viável para as próximas fases do processo.`,
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
      imagem: '/images/fases/fase2.png',
      imagemAlt: 'Rede de micélio bioluminescente em verde-azulado formando estrutura tridimensional ramificada no solo escuro do regolito marciano, vista em macro',
      descricao: 'Desenvolvimento da rede de micélio (Pleurotus ostreatus) para aglomerar partículas e reter água.',
      conteudo: `A Fase 2 marca o início da verdadeira transformação estrutural do solo. Com a toxicidade reduzida, introduzimos o Pleurotus ostreatus, uma espécie de fungo com hifas robustas capazes de criar uma rede tridimensional complexa no solo.

Esta rede de micélio funciona como um "sistema nervoso" do solo, conectando partículas dispersas de regolito e criando agregados estáveis. As hifas fúngicas secretam substâncias mucilaginosas que atuam como "cimento biológico", unindo partículas minerais e criando uma estrutura porosa mas coesa.

Um dos benefícios mais notáveis desta fase é o aumento dramático na capacidade de retenção de água - um aumento de 340% comparado ao regolito não tratado. Isto é crucial tanto para Marte quanto para solos degradados na Terra, onde a gestão hídrica é um desafio constante.

Além disso, a rede de micélio cria milhares de canais microscópicos que permitem a circulação de ar e nutrientes, estabelecendo as condições necessárias para que plantas possam eventualmente se estabelecer no solo.`,
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
      imagem: '/images/fases/fase3.png',
      imagemAlt: 'Três mudas com raízes translúcidas emergindo do solo marciano dentro de um dome, conectadas por rede micelial micorrízica dourada bioluminescente visível abaixo da superfície',
      descricao: 'Simbiose micorrízica com plantas (Glomus/Rhizophagus) para troca de nutrientes e ciclos autossustentáveis.',
      conteudo: `A Fase 3 representa a culminação biológica do sistema E.V.A., onde estabelecemos relações simbióticas entre fungos micorrízicos (Glomus e Rhizophagus) e plantas pioneiras cuidadosamente selecionadas.

Esta simbiose é uma das relações mais antigas e bem-sucedidas da natureza. Os fungos micorrízicos conectam-se intimamente às raízes das plantas, formando estruturas especializadas que permitem a troca eficiente de recursos. As plantas fornecem carboidratos produzidos pela fotossíntese, enquanto os fungos fornecem água e nutrientes minerais (especialmente fósforo e nitrogênio) que extraem do solo com eficiência muito superior às raízes sozinhas.

O impacto é transformador: a área de absorção efetiva das raízes aumenta em até 1000%, permitindo que as plantas prosperem mesmo em condições de baixa disponibilidade de nutrientes. Isto é especialmente crucial em Marte, onde nutrientes orgânicos são essencialmente inexistentes no solo natural.

Com esta fase, estabelecemos um ciclo autossustentável: as plantas produzem matéria orgânica, os fungos a decompõem e reciclam os nutrientes, e o sistema se torna progressivamente mais rico e complexo. É o nascimento de um verdadeiro ecossistema.`,
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
      imagem: '/images/fases/fase4.png',
      imagemAlt: 'Biomassa fúngica escura de Cladosporium revestindo a parede curva do dome marciano, absorvendo radiação ionizante representada por raios roxos enquanto pontos verdes bioluminescentes indicam o processo de radiosíntese',
      descricao: 'Fungos radiotróficos (Cladosporium sphaerospermum) blindando o ecossistema contra radiação ionizante e frio extremo.',
      conteudo: `A Fase 4 é a camada final de proteção do ecossistema E.V.A., utilizando um dos organismos mais fascinantes da natureza: fungos radiotróficos, especialmente o Cladosporium sphaerospermum.

Descobertos crescendo nas paredes do reator nuclear de Chernobyl, estes fungos possuem uma capacidade extraordinária: converter radiação ionizante em energia química através da melanina em suas células - um processo similar à fotossíntese, mas usando radiação em vez de luz visível.

Em um ambiente marciano, onde a radiação cósmica e UV é uma ameaça constante devido à fina atmosfera e ausência de campo magnético forte, esta camada de fungos radiotróficos atua como uma "blindagem biológica viva". A melanina fúngica absorve e dissipa a radiação, protegendo as plantas e organismos do solo abaixo.

Além da proteção radiológica, esta camada fúngica também oferece isolamento térmico, ajudando a estabilizar a temperatura do solo e proteger contra as extremas variações térmicas marcianas. O resultado é um ecossistema robusto, auto-regenerativo e capaz de prosperar em condições que normalmente seriam letais para a vida.`,
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
    if (faseParam !== null && Number.isInteger(n) && n >= 0 && n <= 4) {
      setActiveFase(n);
      setTimeout(() => {
        faseDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [faseParam]);

  const currentFase = fases[activeFase];

  const timelineFases = [
    { num: '0', label: 'Pré-Missão',    tempo: 'T-0 · Terra',  color: '#B87D2A', index: 0 },
    { num: '1', label: 'Desintoxicação', tempo: '0–5 dias',    color: '#993C1D', index: 1 },
    { num: '2', label: 'Estruturação',   tempo: '5–15 dias',   color: '#1D9E75', index: 2 },
    { num: '3', label: 'Nutrição',       tempo: '15–30 dias',  color: '#1D9E75', index: 3 },
    { num: '4', label: 'Proteção',       tempo: '30+ dias',    color: '#533AB7', index: 4 },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Roadmap de <span className="text-[#1D9E75]">Fases</span> do E.V.A.
        </h2>
        <p className="text-[#a0a0a0]">
          Da Terra a Marte: transporte, desintoxicação e transformação do regolito em ecossistema habitável
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
                className={`flex-shrink-0 px-5 py-3 rounded-lg transition-all cursor-pointer ${
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

          {/* Imagem da fase */}
          <div className="relative w-full rounded-xl overflow-hidden mb-6" style={{ height: '260px' }}>
            <img
              src={currentFase.imagem}
              alt={currentFase.imagemAlt}
              className="w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, transparent 55%, ${currentFase.color}30 85%, #0a0f1c 100%)`,
              }}
            />
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
              <h4 className="text-lg font-bold text-white mb-3">
                {currentFase.numero === '00' ? 'Parâmetros Monitorados pelo IoT' : 'Características Principais'}
              </h4>
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

            {/* Bloco IoT exclusivo da Fase 0 */}
            {currentFase.iotInfo && (
              <div
                className="rounded-xl p-6 border"
                style={{ backgroundColor: `${currentFase.color}08`, borderColor: `${currentFase.color}30` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${currentFase.color}25` }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: currentFase.color }}>
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white">Sistema de Telemetria IoT — Edge Computing</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(currentFase.iotInfo).map(([chave, valor]) => {
                    const labels = {
                      hardware: 'Hardware',
                      protocolo: 'Protocolo',
                      broker: 'Broker MQTT',
                      topico: 'Tópico',
                      intervalo: 'Intervalo de publicação',
                    };
                    return (
                      <div key={chave} className="flex items-start gap-3">
                        <span className="text-xs text-[#a0a0a0] min-w-[120px] pt-0.5">{labels[chave]}:</span>
                        <span className="text-sm font-mono" style={{ color: currentFase.color }}>{valor}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-[#a0a0a0] mt-4 pt-4 border-t border-white/5">
                  Entrega vinculada à disciplina de Edge Computing & Computer Systems — simulação disponível no Wokwi com ESP32 e sensores analógicos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Linha do Tempo */}
      <div className="bg-gradient-to-r from-[#FAC775]/10 via-[#993C1D]/10 via-[#1D9E75]/10 to-[#533AB7]/10 border border-white/10 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Linha do Tempo da Missão</h3>
        <div className="flex items-start justify-between max-w-4xl mx-auto gap-1">
          {timelineFases.map((tf, idx) => (
            <div key={tf.num} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <button
                  onClick={() => setActiveFase(tf.index)}
                  className="flex flex-col items-center group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-transform group-hover:scale-110 border-2"
                    style={{
                      backgroundColor: `${tf.color}20`,
                      borderColor: tf.color,
                      boxShadow: activeFase === tf.index ? `0 0 12px ${tf.color}60` : 'none',
                    }}
                  >
                    <span className="text-base font-bold" style={{ color: tf.color }}>{tf.num}</span>
                  </div>
                  <p className="text-xs font-medium text-white text-center leading-tight">{tf.label}</p>
                  <p className="text-[10px] text-[#a0a0a0] text-center mt-0.5">{tf.tempo}</p>
                </button>
              </div>
              {idx < timelineFases.length - 1 && (
                <div className="flex-shrink-0 w-4 mt-5 mx-0.5">
                  <div
                    className="h-0.5 w-full"
                    style={{
                      background: `linear-gradient(to right, ${tf.color}, ${timelineFases[idx + 1].color})`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
