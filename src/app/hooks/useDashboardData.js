import { useState, useEffect } from 'react';

const url = 'https://githubusercontent.com';

export function useDashboardData() {
  const [data, setData] = useState(null);
  const [estado, setEstado] = useState('idle');
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setEstado('carregando');
    fetch('/api/dashboard.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setEstado('sucesso');
      })
      .catch((err) => {
        setErro(err.message);
        setEstado('erro');
      });
  }, []);

  return { data, estado, erro };
}
