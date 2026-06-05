import { NavLink } from 'react-router';
import { Sprout } from 'lucide-react';

export default function Header() {
  const tabs = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/agente', label: 'Agente IA' },
    { path: '/fases', label: 'Fases' },
    { path: '/sobre', label: 'Sobre' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="group flex items-center gap-3 cursor-pointer transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1D9E75]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1D9E75]/35 group-hover:shadow-[0_0_16px_rgba(29,158,117,0.45)]">
              <Sprout className="w-6 h-6 text-[#1D9E75] transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(29,158,117,0.9)]" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">
                <span className="text-white transition-colors duration-300 group-hover:text-[#1D9E75]">E.V.A.</span>
              </h1>
              <p className="text-xs text-[#a0a0a0]">Ecosystem Vitality Assistant</p>
            </div>
          </NavLink>

          <nav className="flex gap-1">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                end={tab.path === '/'}
                className={({ isActive }) =>
                  `flex-shrink-0 px-4 py-2 rounded-lg transition-all cursor-pointer flex flex-col items-start ${
                    isActive
                      ? 'bg-[#1D9E75]/20 border border-[#1D9E75]/50 text-[#1D9E75]'
                      : 'text-[#a0a0a0] hover:text-[#E1F5EE] hover:bg-white/5'
                  }`
                }
              >
                <span className="text-sm font-medium">{tab.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
