import { Brain, Terminal, CheckCircle, AlertCircle, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AgenteTab() {
  const [logs, setLogs] = useState([
    { time: '12:47:32', message: 'Sistema inicializado. Conectando à rede de micélio...', type: 'info' },
    { time: '12:47:45', message: 'Rede fúngica detectada. 24 nós ativos no setor A-C.', type: 'success' },
    { time: '12:48:01', message: 'Alteração química detectada no setor B. Analisando...', type: 'warning' },
    { time: '12:48:15', message: 'Diagnóstico: Redução de perclorato em 12%. Status: Positivo.', type: 'success' },
    { time: '12:48:32', message: 'Iniciando liberação de enzimas na Fase 2...', type: 'info' },
    { time: '12:48:47', message: 'Atividade bioelétrica aumentou 8% no setor B.', type: 'success' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString('pt-BR'),
        message: getRandomLog(),
        type: ['info', 'success', 'warning'][Math.floor(Math.random() * 3)],
      };
      setLogs(prev => [...prev.slice(-5), newLog]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getRandomLog = () => {
    const messages = [
      'Monitorando níveis de umidade no micélio...',
      'Detectado aumento de pH em 0.2 unidades.',
      'Rede fúngica expandindo em direção ao setor D.',
      'Radiação UV dentro dos parâmetros aceitáveis.',
      'Simbiose micorrízica estabelecida com sucesso.',
      'Toxicidade reduzida em mais 3% nas últimas 2 horas.',
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          <span className="text-[#533AB7]">IA Sentinel</span> - Agente Biointeligente
        </h2>
        <p className="text-[#a0a0a0]">
          Sistema de análise preditiva baseado em sinais bioelétricos e dados IoT
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#533AB7]/10 to-transparent border border-[#533AB7]/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#533AB7]/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#533AB7]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Status da IA</h3>
              <p className="text-xs text-[#1D9E75]">● Online</p>
            </div>
          </div>
          <p className="text-[#E1F5EE]/70 text-sm">
            Sistema neural ativo monitorando 24 sensores em tempo real
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1D9E75]/10 to-transparent border border-[#1D9E75]/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#1D9E75]/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#1D9E75]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Análises/hora</h3>
              <p className="text-xs text-[#a0a0a0]">Última hora</p>
            </div>
          </div>
          <p className="text-3xl font-mono font-bold text-[#1D9E75]">1,247</p>
        </div>

        <div className="bg-gradient-to-br from-[#FAC775]/10 to-transparent border border-[#FAC775]/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#FAC775]/20 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-[#FAC775]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Precisão</h3>
              <p className="text-xs text-[#a0a0a0]">Diagnósticos</p>
            </div>
          </div>
          <p className="text-3xl font-mono font-bold text-[#FAC775]">98.4%</p>
        </div>
      </div>

      <div className="bg-[#0f1422] border border-[#533AB7]/30 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-5 h-5 text-[#533AB7]" />
          <h3 className="text-lg font-bold text-white">Terminal de Logs da IA</h3>
          <span className="ml-auto text-xs text-[#a0a0a0] font-mono">LIVE</span>
        </div>

        <div className="bg-[#0a0a0a] rounded-lg p-4 font-mono text-sm space-y-2 h-96 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="flex items-start gap-3 py-1">
              <span className="text-[#a0a0a0] text-xs">[{log.time}]</span>
              {log.type === 'success' && <CheckCircle className="w-4 h-4 text-[#1D9E75] mt-0.5" />}
              {log.type === 'warning' && <AlertCircle className="w-4 h-4 text-[#FAC775] mt-0.5" />}
              {log.type === 'info' && <Activity className="w-4 h-4 text-[#533AB7] mt-0.5" />}
              <span className={`flex-1 ${
                log.type === 'success' ? 'text-[#1D9E75]' :
                log.type === 'warning' ? 'text-[#FAC775]' :
                'text-[#E1F5EE]'
              }`}>
                [IA Sentinel]: {log.message}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1D9E75]/10 to-[#533AB7]/10 border border-white/10 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Diagnóstico Preditivo Atual</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm text-[#a0a0a0] mb-3">Análise do Ecossistema</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[#E1F5EE]">Saúde da Rede Fúngica</span>
                <span className="text-[#1D9E75] font-mono font-bold">87%</span>
              </div>
              <div className="w-full bg-[#3a3a38] rounded-full h-2">
                <div className="bg-[#1D9E75] h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#E1F5EE]">Capacidade de Desintoxicação</span>
                <span className="text-[#533AB7] font-mono font-bold">73%</span>
              </div>
              <div className="w-full bg-[#3a3a38] rounded-full h-2">
                <div className="bg-[#533AB7] h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#E1F5EE]">Proteção contra Radiação</span>
                <span className="text-[#FAC775] font-mono font-bold">65%</span>
              </div>
              <div className="w-full bg-[#3a3a38] rounded-full h-2">
                <div className="bg-[#FAC775] h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-[#a0a0a0] mb-3">Recomendações da IA</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#1D9E75] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Aumentar umidade no setor C</p>
                  <p className="text-xs text-[#a0a0a0] mt-1">Detectado stress hídrico em 3 nós</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#533AB7]/10 border border-[#533AB7]/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#533AB7] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Continuar Fase 2 por 48h</p>
                  <p className="text-xs text-[#a0a0a0] mt-1">Estruturação do solo em progresso ideal</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FAC775]/10 border border-[#FAC775]/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-[#FAC775] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Monitorar radiação UV</p>
                  <p className="text-xs text-[#a0a0a0] mt-1">Pico solar previsto em 6 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
