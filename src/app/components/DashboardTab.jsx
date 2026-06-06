import { Activity, Droplets, Radiation, AlertTriangle, Zap, Wifi, Clock, Rocket, Loader2 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { useDashboardData } from '../hooks/useDashboardData';

export default function DashboardTab() {
  const navigate = useNavigate();
  const { data, estado, erro } = useDashboardData();

  if (estado === 'carregando') {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <Loader2 className="w-10 h-10 text-[#1D9E75] animate-spin" />
        <p className="text-[#a0a0a0] text-sm font-mono">Carregando dados dos sensores...</p>
      </div>
    );
  }

  if (estado === 'erro' || !data) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <AlertTriangle className="w-10 h-10 text-[#993C1D]" />
        <p className="text-white font-bold">Falha ao carregar dados da missão</p>
        <p className="text-[#a0a0a0] text-sm font-mono">{erro}</p>
      </div>
    );
  }

  const MISSION_START = new Date(data.missao.inicio);
  const now = new Date();
  const diffMs = now.getTime() - MISSION_START.getTime();
  const diasDecorridos = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const metricCards = [
    { icon: Activity,      label: 'pH do Solo',              value: String(data.metricas.ph),          unit: 'pH',    status: 'Neutro',     color: '#1D9E75', bgColor: 'bg-[#1D9E75]/20', borderColor: 'border-[#1D9E75]/50' },
    { icon: Droplets,      label: 'Umidade de Micélio',      value: String(data.metricas.umidade),     unit: '%',     status: 'Ótimo',      color: '#533AB7', bgColor: 'bg-[#533AB7]/20', borderColor: 'border-[#533AB7]/50' },
    { icon: Radiation,     label: 'Nível de Radiação',       value: String(data.metricas.radiacao),    unit: 'μSv/h', status: 'Controlado', color: '#FAC775', bgColor: 'bg-[#FAC775]/20', borderColor: 'border-[#FAC775]/50' },
    { icon: AlertTriangle, label: 'Toxicidade (Perclorato)', value: String(data.metricas.toxicidade),  unit: 'ppm',   status: 'Em redução', color: '#993C1D', bgColor: 'bg-[#993C1D]/20', borderColor: 'border-[#993C1D]/50' },
    { icon: Zap,           label: 'Atividade Bioelétrica',   value: String(data.metricas.bioeletrica), unit: 'mV',    status: 'Alta',       color: '#1D9E75', bgColor: 'bg-[#1D9E75]/20', borderColor: 'border-[#1D9E75]/50' },
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
                Dia <span className="text-[#1D9E75]">{diasDecorridos}</span> de missão
              </h3>
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl font-mono font-bold text-white">{String(diasDecorridos).padStart(2, '0')}</div>
            <div className="text-xs text-[#a0a0a0] mt-2 tracking-widest uppercase">dias</div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1D9E75]/30 bg-[#1D9E75]/10">
            <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
            <span className="text-sm text-[#1D9E75] font-medium">Sistema Ativo</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metricCards.map((metric, index) => (
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
            <LineChart data={data.historico}>
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
            <BarChart data={data.historico}>
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
              <span className="text-sm font-bold font-mono text-white">{data.sensores.ativos}/{data.sensores.total}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#533AB7]" />
              <span className="text-xs text-[#a0a0a0]">Último Update</span>
              <span className="text-sm font-bold font-mono text-white">{data.sensores.ultimoUpdate}</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {data.fases.map((fase) => (
            <div
              key={fase.numero}
              onClick={() => navigate(`/fases?fase=${fase.faseIndex}`)}
              className="bg-[#0a0f1c]/60 border border-white/5 rounded-xl p-5 cursor-pointer"
              style={{ transition: 'border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${fase.cor}40`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold font-mono" style={{ color: fase.cor }}>{fase.numero}</span>
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
                    className="h-full rounded-full"
                    style={{
                      width: `${fase.progresso}%`,
                      backgroundColor: fase.cor,
                      boxShadow: fase.progresso > 0 ? `0 0 8px ${fase.cor}60` : 'none',
                      transition: 'width 0.7s ease'
                    }}
                  />
                </div>
                <span className="text-sm font-mono font-bold" style={{ color: fase.cor, minWidth: '40px', textAlign: 'right' }}>
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
