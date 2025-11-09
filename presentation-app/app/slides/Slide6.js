'use client';

import { useEffect, useRef } from 'react';
import SlideWrapper from './SlideWrapper';

export default function Slide6() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      import('chart.js/auto').then((ChartModule) => {
        const Chart = ChartModule.default;
        
        import('chartjs-plugin-datalabels').then((DataLabelsModule) => {
          const ChartDataLabels = DataLabelsModule.default;
          Chart.register(ChartDataLabels);

          const ctx = chartRef.current.getContext('2d');
          
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
          
          chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Belgium', 'Japan', 'USA', 'Chile', 'India'],
              datasets: [
                {
                  label: 'Market Income Gini',
                  data: [0.51, 0.5, 0.55, 0.46, 0.57],
                  backgroundColor: 'rgba(30, 64, 175, 0.7)',
                  order: 2,
                  barPercentage: 0.8,
                  categoryPercentage: 0.85,
                  yAxisID: 'y',
                },
                {
                  label: 'Disposable Income Gini',
                  data: [0.26, 0.34, 0.39, 0.45, 0.47],
                  backgroundColor: 'rgba(59, 130, 246, 0.6)',
                  order: 3,
                  barPercentage: 0.8,
                  categoryPercentage: 0.85,
                  yAxisID: 'y',
                },
                {
                  label: 'Gini Reduction (Points)',
                  data: [25, 16, 16, 1, 10],
                  type: 'line',
                  backgroundColor: 'rgba(220, 38, 38, 0.2)',
                  borderColor: 'rgba(220, 38, 38, 1)',
                  borderWidth: 3,
                  pointBackgroundColor: 'rgba(220, 38, 38, 1)',
                  pointBorderColor: '#fff',
                  pointBorderWidth: 2,
                  pointRadius: 6,
                  pointHoverRadius: 8,
                  order: 1,
                  yAxisID: 'y1',
                  tension: 0.2,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: 'index', intersect: false },
              plugins: {
                title: {
                  display: true,
                  text: 'Gini Coefficient: Market vs Disposable Income',
                  font: { family: "'Montserrat', sans-serif", size: 16, weight: 'bold' },
                },
                legend: {
                  position: 'top',
                  labels: {
                    font: { family: "'Open Sans', sans-serif", size: 12 },
                    padding: 20,
                    usePointStyle: true,
                  },
                },
                datalabels: {
                  display: true,
                  formatter: function (value, context) {
                    if (context.dataset.label.includes('Reduction')) {
                      return value;
                    } else {
                      return value.toFixed(2);
                    }
                  },
                  anchor: 'end',
                  align: 'top',
                  color: function (context) {
                    if (context.dataset.label.includes('Market')) return '#1e3a8a';
                    else if (context.dataset.label.includes('Disposable')) return '#2563eb';
                    return '#dc2626';
                  },
                  font: { size: 10, weight: 'bold' },
                  offset: 2,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Country',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold' },
                  },
                },
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  title: {
                    display: true,
                    text: 'Gini Coefficient',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold' },
                  },
                  ticks: {
                    callback: function (value) {
                      return value.toFixed(2);
                    },
                  },
                  min: 0,
                  max: 0.65,
                  beginAtZero: true,
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  title: {
                    display: true,
                    text: 'Reduction (Points)',
                    font: { family: "'Montserrat', sans-serif", size: 14, weight: 'bold', color: '#dc2626' },
                  },
                  ticks: {
                    color: '#dc2626',
                    callback: function (value) {
                      return value;
                    },
                  },
                  min: 0,
                  max: 30,
                  grid: { drawOnChartArea: false },
                },
              },
            },
          });
        });
      });
    }
    
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <SlideWrapper>
      <div className="header" style={{ marginBottom: '1rem' }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          color: '#1e40af',
          fontSize: '2.2rem',
          borderBottom: '3px solid #1e40af',
          paddingBottom: '0.5rem'
        }}>
          How Different Countries Fix Inequality
        </h1>
      </div>
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        flex: 1,
        padding: '16px',
        marginBottom: '24px',
        height: '350px'
      }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div style={{
        backgroundColor: '#dbeafe',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
            <i className="fas fa-check-circle"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5 }}>
            <strong>Look at Belgium vs Chile:</strong> Belgium cuts inequality by 25 points, while Chile barely changes it (just 1 point).
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
            <i className="fas fa-landmark"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5 }}>
            <strong>Rich countries do better:</strong> Countries that collect more taxes and spend on social programs reduce inequality more.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <span style={{ color: '#2563eb', marginRight: '0.75rem', flexShrink: 0 }}>
            <i className="fas fa-flag"></i>
          </span>
          <p style={{ flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.5 }}>
            <strong>Where's India?</strong> We reduce inequality by about 10 points - doing okay, but not as good as countries like Belgium or Japan.
          </p>
        </div>
      </div>
      <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#64748b', textAlign: 'right' }}>
        <p>Source: OECD and World Bank data, 2023</p>
      </div>
    </SlideWrapper>
  );
}

