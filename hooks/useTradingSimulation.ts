import { useState, useEffect } from 'react';

export interface SimulatedTrade {
  id: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  pl: number;
}

export function useTradingSimulation() {
  const [totalEquity, setTotalEquity] = useState(12450.00);
  const [activeTrades, setActiveTrades] = useState<SimulatedTrade[]>([
    { id: '1', symbol: 'EURUSD', type: 'BUY', pl: 38.00 },
    { id: '2', symbol: 'BTCUSD', type: 'SELL', pl: 11.50 },
    { id: '3', symbol: 'XAUUSD', type: 'BUY', pl: -1.40 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrades(prev => prev.map(trade => {
        // Simulate small market fluctuations
        const change = (Math.random() - 0.5) * 2;
        return { ...trade, pl: trade.pl + change };
      }));

      // Update total equity based on trade changes
      setTotalEquity(prev => {
        const totalPl = activeTrades.reduce((sum, t) => sum + t.pl, 0);
        return 12400 + totalPl;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeTrades]);

  return { totalEquity, activeTrades };
}
