import { useState, useEffect } from 'react';

export interface SimulatedTrade {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  pl: number;
}

export function useTradingSimulation() {
  const [activeTrades, setActiveTrades] = useState<SimulatedTrade[]>([
    { id: '1', symbol: 'EURUSD', type: 'BUY', pl: 38.00 },
    { id: '2', symbol: 'BTCUSD', type: 'SELL', pl: 11.50 },
    { id: '3', symbol: 'XAUUSD', type: 'BUY', pl: -1.40 },
  ]);

  const totalEquity = activeTrades ? 12400 + activeTrades.reduce((sum, t) => sum + (t?.pl || 0), 0) : 12400;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrades(prev => {
        if (!prev) return [];
        return prev.map(trade => {
          // Simulate small market fluctuations
          const change = (Math.random() - 0.5) * 2;
          return { ...trade, pl: (trade?.pl || 0) + change };
        });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { totalEquity, activeTrades: activeTrades || [] };
}
