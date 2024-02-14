import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { dados } from './dados/dados';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '1000px'
      }}
    >
      <div
        style={{
          width: '500px',
          height: '500px'
        }}
      >
        <Pie
          data={{
            labels: ['Feminino', 'Masculino'],
            datasets: [
              {
                label: 'Número de pessoas',
                data: Object.values(dados.genero[0]),
                backgroundColor: ['Pink', 'Blue'],
                borderColor: ['Dark Pink', 'Dark Blue'],
                borderWidth: 0.4
              }
            ]
          }}
        />
      </div>
      <div
        style={{
          width: '500px',
          height: '500px'
        }}
      >
        <Pie
          data={{
            labels: ['Feminino', 'Masculino'],
            datasets: [
              {
                label: 'Número de pessoas',
                data: Object.values(dados.genero[1]),
                backgroundColor: ['Pink', 'Blue'],
                borderColor: ['Dark Pink', 'Dark Blue'],
                borderWidth: 0.4
              }
            ]
          }}
        />
      </div>
    </div>
  );
}
