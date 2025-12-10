API de Animais
==============

Uma API simples para consultar informacoes sobre animais.

Rotas Disponiveis
-----------------

GET /
  Retorna um guia de uso da API.

GET /animal
  Retorna um animal aleatorio com nome cientifico e descricao.

GET /animal/lista
  Retorna a lista com os nomes de todos os animais disponiveis.

GET /animal/:nome
  Retorna informacoes sobre um animal especifico.
  Exemplo: /animal/Leao

Como Executar
-------------

1. Instale as dependencias:
   npm install

2. Execute o servidor:
   npx tsx index.ts

3. Acesse em http://localhost:3000

Tecnologias
-----------

- Node.js
- Fastify
- TypeScript
