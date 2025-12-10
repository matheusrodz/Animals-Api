import fastify from 'fastify';
import chalk from 'chalk'; 
import animals from './public/animals.json' 

const keys = Object.keys(animals)
const randomIndex = Math.floor(Math.random() * keys.length)
const animal = keys[randomIndex] as keyof typeof animals;
const animalData = animals[animal];

const server = fastify();
server.get('/', async (request, reply) => {
  reply.send({ guide: 'Oh, Muito Obrigado por acessar esta APIs, use as rotas /animal para ver um animal aleatório, /animal/lista para ver todos os animais dísponiveis e /animal/:nome para ver um animal específico'})
})
server.get('/animal', async (request, reply) => { 
  reply.send({ animal: animal, Científico: animalData.Nome_cientifico, Descrição: animalData.Desc })
})
server.get('/animal/lista', async (request, reply) => {
  const nomes = Object.keys(animals)
  reply.send({ animais: nomes })
})
server.get('/animal/:nome', async (request, reply) => {
  const { nome } = request.params as { nome: string };
  const animalDataset = animals[nome as keyof typeof animals];
  if (animalDataset) {
    reply.send({ animal: nome, Descrição: animalDataset.Desc})
  }
  else {
    reply.send({ error: 'Animal não encontrado'})
  }
})
const port = Number(process.env.PORT) || 3000; // 3000 só para rodar local
const host = '0.0.0.0';

app.listen({ port, host });
