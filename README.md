# Anonymous Question

![image](https://user-images.githubusercontent.com/48057126/131717532-d2332e99-f7c4-429a-9d94-54032cfa1245.png)

Projeto desenvolvido durante a Next Level Week da Rocketseat, onde era denominado RocketQ: https://app.rocketseat.com.br/node/mission-discover

## 🚀 Tecnologias

<ul>
  <li>HTML</li>
  <li>EJS</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>Node</li>
  <li>SQL</li>
</ul>

## 💻 Objetivo

A produção deste website tem como principal objetivo a fixação dos conhecimentos nas tecnologias, através da prática.

## 📚 Features

### ◼️ SQLite3

A SQLite3 é uma biblioteca em linguagem C que permite a implementação de um banco de dados embutido. Para incluí-la no projeto para executar os seguintes comandos no terminal na pasta do projeto: 
```
npm install SQLite
```
```
npm install SQLite3
```

Depois basta criar a pasta db e adicionar um arquivo config.js nesta, para fazer o require do SQLite3 e da função open do SQLite. Onde filename deve conter o caminho da pasta onde estará a config e o banco de dados, seguida do nome do banco em sí com a extensão '.sqlite'.
```js
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
module.exports = () =>
  open({
    filename: './src/db/anonymousQuestions.sqlite',
    driver: sqlite3.Database
  })
```
Depois disso para iniciar o banco de dados, cria-se o arquivo init.js na mesma pasta, com isso, basta adicionar na função init os comandos SQL para criação das tabelas conforme a estrutura do banco de dados específico, no caso desse site foram executados os seguintes comandos:
```js
const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()
    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`)

    await db.close()
  }
}

initDb.init()
```
### ◼️ Embedded JavaScript templating (EJS)
EJS é um linguagem de modelagem permitindo gerar as marcações HTML, juntamente com Javascript. No caso desse website foi utilizado principalmente para facilitar a criação das páginas. Pois, torna possível adicionar o conteúdo de um arquivo .ejs em uma parte específica de outro, assim, facilitando a construção das páginas e das rotas.<br><br>

Por exemplo, a imagem a seguir mostra o index.ejs que contém como HTML apenas as imagens e na div container é adicionado o conteúdo do arquivo enter-room.ejs (contido na pasta parts):
<br><br>

![image](https://user-images.githubusercontent.com/48057126/131734018-6d39a0b8-3580-49bf-954e-c36fa9971155.png)
<br><br>
Já na seguinte figura, o index.ejs recebe o conteúdo do arquivo create-pass.ejs (contido também na pasta parts):
<br><br>
![image](https://user-images.githubusercontent.com/48057126/131733756-4cb17891-f6e8-41dd-a4fb-4d11bce4118d.png)
<br><br>
E essa inclusão é feita da seguinte forma no index.ejs:
```ejs
<main>
  <div class="container">
  <!-- -->
    <%- include(`parts/${page}`) %>
  </div>
</main>
```
