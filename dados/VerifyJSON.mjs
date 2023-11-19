import { readFileSync } from 'node:fs';
import { exit } from 'node:process';

let file;
try {
  file = readFileSync('./dados.json', { encoding: 'UTF-8' });
} catch (error) {
  console.error('Verifique se o caminho do arquivo está correto.');
  exit(-1);
}

const json = JSON.parse(file);

let i = 0;
for (const x in json) {
  i++;
  console.log(`${json[x].length} respostas para pergunta ${i.toString().padStart(2, '0')}: ${x}`);
}