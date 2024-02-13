import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { dados2023 } from './dados/dados';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Orange',
    'Yellow',
    'Green',
    'Black',
    'Red',
    'Blue',
    'White',
    'Purple',
    'Brown',
    'Grey'
  ],
  datasets: [
    {
      label: 'Número de pessoas que escolheram essa cor',
      data: Object.values(dados2023[5]),
      backgroundColor: Object.keys(dados2023[5]),
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 0.4
    }
  ]
};

export default function App(): JSX.Element {
  return (
    <div
      style={{
        width: '600px'
      }}
    >
      <Pie data={data} />
      <Pie data={data} />
    </div>
  );
}
