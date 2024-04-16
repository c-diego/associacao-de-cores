import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { dados } from './dados/dados';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function App(): JSX.Element {
  return (
    <div style={{ backgroundColor: 'aliceblue' }}>
      <div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
          }}
        >
          <div style={{}}>
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
              style={{
                height: '30rem',
                width: '30rem'
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    font: { size: 20 },
                    text: 'Gênero'
                  }
                }
              }}
            />
          </div>
          <div style={{}}>
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
              style={{
                height: '30rem',
                width: '30rem'
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    font: { size: 20 },
                    text: 'Gênero'
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
      <CoresEPalavras />
    </div>
  );
}

function CoresEPalavras(): JSX.Element {
  const data = [];
  const labels = Object.keys(dados);
  let idx = 0;

  for (const dado of Object.values(dados)) {
    data.push([
      {
        datasets: [
          {
            label: 'Quantidade',
            data: Object.values(dado[0]),
            backgroundColor: Object.keys(dado[0]),
            borderColor: 'blue',
            borderWidth: 0.4
          }
        ]
      },
      {
        plugins: {
          title: {
            display: true,
            font: { size: 20 },
            text: labels[idx] + ' (2003)'
          }
        }
      },
      {
        datasets: [
          {
            label: 'Quantidade',
            data: Object.values(dado[1]),
            backgroundColor: Object.keys(dado[1]),
            borderColor: 'blue',
            borderWidth: 0.4
          }
        ]
      },
      {
        plugins: {
          title: {
            display: true,
            font: { size: 20 },
            text: labels[idx++] + ' (2023)'
          }
        }
      }
    ]);
  }

  data.shift();

  return (
    <>
      {data.map((item, indice) => (
        <Graficos
          key={indice}
          data2003={item[0]}
          options2003={item[1]}
          data2023={item[2]}
          options2023={item[3]}
        />
      ))}
    </>
  );
}

function Graficos({
  data2023,
  options2003,
  data2003,
  options2023
}): JSX.Element {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          marginTop: '5rem'
        }}
      >
        <div>
          <Pie
            data={data2023}
            options={options2023}
            style={{
              height: '30rem',
              width: '30rem'
            }}
          />
        </div>

        <div>
          <Pie
            data={data2003}
            options={options2003}
            style={{
              height: '30rem',
              width: '30rem'
            }}
          />
        </div>
      </div>
    </>
  );
}
