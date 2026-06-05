import { Routes, Route } from 'react-router';
import Header from './components/Header';
import HomeTab from './components/HomeTab';
import DashboardTab from './components/DashboardTab';
import AgenteTab from './components/AgenteTab';
import FasesTab from './components/FasesTab';
import SobreTab from './components/SobreTab';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-16">
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="/dashboard" element={<DashboardTab />} />
          <Route path="/agente" element={<AgenteTab />} />
          <Route path="/fases" element={<FasesTab />} />
          <Route path="/sobre" element={<SobreTab />} />
        </Routes>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#a0a0a0] text-sm">
            E.V.A. © 2026 — Sistema Biointeligente para Regeneração de Ecossistemas
          </p>
        </div>
      </footer>
    </div>
  );
}
