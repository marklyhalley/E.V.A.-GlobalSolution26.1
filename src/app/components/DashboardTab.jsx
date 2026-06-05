import { Activity, Droplets, Radiation, AlertTriangle, Zap, Wifi, Clock, CalendarDays, Rocket } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router';

export default function DashboardTab() {
  const navigate = useNavigate();
  const MISSION_START = new Date('2026-05-25T00:00:00');
  const now = new Date();
  const diffMs = now.getTime() - MISSION_START.getTime();
  const diasDecorridos = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horasDecorridas = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosDecorridos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  const faseAtualNome =
    diasDecorridos < 5 ? 'Fase 1 — Desintoxicação' :
    diasDecorridos < 15 ? 'Fase 2 — Estruturação do Solo' :
    diasDecorridos < 30 ? 'Fase 3 — Nutrição e Regeneração' :
    'Fase 4 — Proteção e Estabilidade';

  const faseAtualColor =
    diasDecorridos < 5 ? '#993C1D' :
    diasDecorridos < 30 ? '#1D9E75' :
    '#533AB7';

  const metricsData = [
    { time: '00:00', ph: 6.2, umidade: 45, radiacao: 82, toxicidade: 35, bioeletrica: 28 },
    { time: '04:00', ph: 6.4, umidade: 52, radiacao: 78, toxicidade: 32, bioeletrica: 34 },
    { time: '08:00', ph: 6.6, umidade: 58, radiacao: 75, toxicidade: 28, bioeletrica: 42 },
    { time: '12:00', ph: 6.8, umidade: 61, radiacao: 71, toxicidade: 24, bioeletrica: 51 },
    { time: '16:00', ph: 7.0, umidade: 65, radiacao: 68, toxicidade: 20, bioeletrica: 58 },
    { time: '20:00', ph: 7.1, umidade: 68, radiacao: 64, toxicidade: 17, bioeletrica: 63 },
  ];

  const metrics = [
    { icon: Activity, label: 'pH do Solo', value: '7.1', unit: 'pH', status: 'Neutro', color: '#1D9E75', bgColor: 'bg-[#1D9E75]/20', borderColor: 'border-[#1D9E75]/50' },
    { icon: Droplets, label: 'Umidade de Micélio', value: '68', unit: '%', status: 'Ótimo', color: '#533AB7', bgColor: 'bg-[#533AB7]/20', borderColor: 'border-[#533AB7]/50' },
    { icon: Radiation, label: 'Nível de Radiação', value: '64', unit: 'μSv/h', status: 'Controlado', color: '#FAC775', bgColor: 'bg-[#FAC775]/20', borderColor: 'border-[#FAC775]/50' },
    { icon: AlertTriangle, label: 'Toxicidade (Perclorato)', value: '17', unit: 'ppm', status: 'Em redução', color: '#993C1D', bgColor: 'bg-[#993C1D]/20', borderColor: 'border-[#993C1D]/50' },
    { icon: Zap, label: 'Atividade Bioelétrica', value: '63', unit: 'mV', status: 'Alta', color: '#1D9E75', bgColor: 'bg-[#1D9E75]/20', borderColor: 'border-[#1D9E75]/50' },
  ];

  const fasesStatus = [
    { numero: '01', titulo: 'Desintoxicação', progresso: 100, tempo: '0–5 dias', status: 'Concluído', statusColor: '#1D9E75', color: '#993C1D', faseIndex: 0 },
    { numero: '02', titulo: 'Estruturação do Solo', progresso: 68, tempo: '5–15 dias', status: 'Ativo', statusColor: '#1D9E75', color: '#1D9E75', faseIndex: 1 },
    { numero: '03', titulo: 'Nutrição e Regeneração', progresso: 22, tempo: '15–30 dias', status: 'Ativo', statusColor: '#1D9E75', color: '#1D9E75', faseIndex: 2 },
    { numero: '04', titulo: 'Proteção e Estabilidade', progresso: 0, tempo: '30+ dias', status: 'Planejado', statusColor: '#FAC775', color: '#533AB7', faseIndex: 3 },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          Dashboard de Monitoramento <span className="text-[#533AB7]">IoT</span>
        </h2>
        <p className="text-[#a0a0a0]">
          Dados em tempo real dos sensores instalados no Dome E.V.A.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0f1422] via-[#533AB7]/10 to-[#0f1422] border border-[#533AB7]/30 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#533AB7]/20 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-7 h-7 text-[#533AB7]" />
            </div>
            <div>
              <p className="text-xs text-[#a0a0a0] mb-0.5">Missão iniciada em 25 de maio de 2026</p>
              <h3 className="text-2xl font-bold text-white">
                Dia <span style={{ color: faseAtualColor }}>{diasDecorridos}</span> de missão
              </h3>
              <p className="text-sm mt-0.5" style={{ color: faseAtualColor }}>{faseAtualNome}</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-white">{String(diasDecorridos).padStart(2, '0')}</div>
              <div className="text-xs text-[#a0a0a0] mt-1">dias</div>
            </div>
            <div className="text-2xl font-mono text-[#533AB7]/50">:</div>
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-white">{String(horasDecorridas).padStart(2, '0')}</div>
              <div className="text-xs text-[#a0a0a0] mt-1">horas</div>
            </div>
            <div className="text-2xl font-mono text-[#533AB7]/50">:</div>
            <div className="text-center">
              <div className="text-4xl font-mono font-bold text-white">{String(minutosDecorridos).padStart(2, '0')}</div>
              <div className="text-xs text-[#a0a0a0] mt-1">minutos</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1D9E75]/30 bg-[#1D9E75]/10">
            <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
            <span className="text-sm text-[#1D9E75] font-medium">Sistema Ativo</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className={`bg-[#0f1422] border ${metric.borderColor} rounded-xl p-6 hover:scale-105 transition-all`}>
            <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center mb-4`}>
              <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
            </div>
            <p className="text-xs text-[#a0a0a0] mb-1">{metric.label}</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-mono font-bold text-white">{metric.value}</span>
              <span className="text-sm text-[#a0a0a0] font-mono">{metric.unit}</span>
            </div>
            <span className="inline-block px-2 py-1 rounded text-xs" style={{ backgroundColor: `${metric.color}20`, color: metric.color }}>
              {metric.status}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0f1422] border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Evolução da Desintoxicação</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metricsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3a3a38" />
              <XAxis dataKey="time" stroke="#a0a0a0" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
              <YAxis stroke="#a0a0a0" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
              <Tooltip contentStyle={{ backgroundColor: '#0f1422', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} labelStyle={{ color: '#E1F5EE' }} />
              <Line type="monotone" dataKey="toxicidade" stroke="#993C1D" strokeWidth={2} dot={{ fill: '#993C1D' }} />
              <Line type="monotone" dataKey="ph" stroke="#1D9E75" strokeWidth={2} dot={{ fill: '#1D9E75' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#0f1422] border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Atividade da Rede Fúngica</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={metricsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3a3a38" />
              <XAxis dataKey="time" stroke="#a0a0a0" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
              <YAxis stroke="#a0a0a0" style={{ fontSize: '12px', fontFamily: 'monospace' }} />
              <Tooltip contentStyle={{ backgroundColor: '#0f1422', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} labelStyle={{ color: '#E1F5EE' }} />
              <Bar dataKey="bioeletrica" fill="#1D9E75" radius={[8, 8, 0, 0]} />
              <Bar dataKey="umidade" fill="#533AB7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#533AB7]/10 to-transparent border border-[#533AB7]/30 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Progresso das Fases</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-[#1D9E75]" />
              <span className="text-xs text-[#a0a0a0]">Sensores Ativos</span>
              <span className="text-sm font-bold font-mono text-white">24/24</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#533AB7]" />
              <span className="text-xs text-[#a0a0a0]">Último Update</span>
              <span className="text-sm font-bold font-mono text-white">12:47:32</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {fasesStatus.map((fase) => (
            <div
              key={fase.numero}
              onClick={() => navigate(`/fases?fase=${fase.faseIndex}`)}
              className="bg-[#0a0f1c]/60 border border-white/5 rounded-xl p-5 cursor-pointer transition-all hover:border-white/20 hover:bg-[#0a0f1c]/80"
              style={{ transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${fase.color}40`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold font-mono" style={{ color: fase.color }}>{fase.numero}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{fase.titulo}</p>
                    <p className="text-xs text-[#a0a0a0]">{fase.tempo}</p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: `${fase.statusColor}20`, color: fase.statusColor }}>
                  {fase.status}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${fase.progresso}%`, backgroundColor: fase.color, boxShadow: fase.progresso > 0 ? `0 0 8px ${fase.color}60` : 'none' }}
                  />
                </div>
                <span className="text-sm font-mono font-bold" style={{ color: fase.color, minWidth: '40px', textAlign: 'right' }}>
                  {fase.progresso}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
