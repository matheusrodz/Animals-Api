# API de Animais

API REST para consulta de informacoes sobre animais brasileiros e do mundo.

## Endpoints

### `GET /`
Retorna um guia de uso da API.

**Resposta:**
```json
{
  "guide": "Oh, Muito Obrigado por acessar esta APIs, use as rotas /animal para ver um animal aleatorio..."
}
```

### `GET /animal`
Retorna um animal aleatorio com nome cientifico e descricao.

**Resposta:**
```json
{
  "animal": "Onca-pintada",
  "Cientifico": "Panthera onca",
  "Descricao": "Maior felino das Americas; excelente nadadora."
}
```

### `GET /animal/lista`
Retorna a lista com os nomes de todos os animais disponiveis.

**Resposta:**
```json
{
  "animais": ["Anta", "Arara-azul", "Abelha", "Leao", "..."]
}
```

### `GET /animal/:nome`
Retorna informacoes sobre um animal especifico.

**Exemplo:** `/animal/Leao`

**Resposta:**
```json
{
  "animal": "Leao",
  "Descricao": "Grande felino africano que vive em alcateias."
}
```

## Animais Disponiveis

A API conta com mais de 50 animais, incluindo:
- Mamiferos: Anta, Capivara, Onca-pintada, Lobo-guara, Leao, Elefante...
- Aves: Arara-azul, Harpia, Tucano, Beija-flor, Flamingo...
- Repteis: Jacare-acu, Cascavel, Iguana-verde, Jabuti...
- E muito mais!

## Como Executar

```bash
npm install
npx tsx index.ts
```

Servidor disponivel em `http://localhost:3000`

## Tecnologias

- Node.js
- Fastify
- TypeScript

## Autor

Matheus Rodz
# API de Animais

API REST para consulta de informacoes sobre animais brasileiros e do mundo.

## Endpoints

### `GET /`
Retorna um guia de uso da API.

**Resposta:**
```json
{
  "guide": "Oh, Muito Obrigado por acessar esta APIs, use as rotas /animal para ver um animal aleatorio..."
}
```

### `GET /animal`
Retorna um animal aleatorio com nome cientifico e descricao.

**Resposta:**
```json
{
  "animal": "Onca-pintada",
  "Cientifico": "Panthera onca",
  "Descricao": "Maior felino das Americas; excelente nadadora."
}
```

### `GET /animal/lista`
Retorna a lista com os nomes de todos os animais disponiveis.

**Resposta:**
```json
{
  "animais": ["Anta", "Arara-azul", "Abelha", "Leao", "..."]
}
```

### `GET /animal/:nome`
Retorna informacoes sobre um animal especifico.

**Exemplo:** `/animal/Leao`

**Resposta:**
```json
{
  "animal": "Leao",
  "Descricao": "Grande felino africano que vive em alcateias."
}
```

## Animais Disponiveis

A API conta com mais de 50 animais, incluindo:
- Mamiferos: Anta, Capivara, Onca-pintada, Lobo-guara, Leao, Elefante...
- Aves: Arara-azul, Harpia, Tucano, Beija-flor, Flamingo...
- Repteis: Jacare-acu, Cascavel, Iguana-verde, Jabuti...
- E muito mais!

## Como Executar

```bash
npm install
npx tsx index.ts
```

Servidor disponivel em `http://localhost:3000`

## Tecnologias

- Node.js
- Fastify
- TypeScript

## Autor

Matheus Rodz
