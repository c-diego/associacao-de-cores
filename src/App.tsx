import dados from '../dados.json';

export default function App(): JSX.Element {
  const participantes = filtraParticipantes();

  return <Participante participantes={participantes} />;
}

function Participante({
  participantes
}: {
  participantes: React.ReactNode[][];
}): JSX.Element {
  return (
    <>
      {participantes.map((participante, index) => (
        <div
          key={index}
          style={{
            border: '1px solid black',
            padding: '10px'
          }}
        >
          <h2>PARTICIPANTE {index + 1}</h2>
          {participante.map((item, innerIndex) => (
            <span key={innerIndex}>
              {(innerIndex + 1) % 2 !== 0 ? (
                dados['2023'].perguntas[innerIndex / 2]
              ) : (
                <span style={{ color: 'blue' }}> {item}</span>
              )}
              {(innerIndex + 1) % 2 === 0 && <br />}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

function filtraParticipantes(): any[] {
  const participantes = [];

  for (const participante of dados['2023'].dados) {
    const perguntasRespostas = [];
    for (const [pergunta, resposta] of Object.entries(participante)) {
      perguntasRespostas.push(pergunta, resposta);
    }
    participantes.push(perguntasRespostas);
  }

  return participantes;
}
