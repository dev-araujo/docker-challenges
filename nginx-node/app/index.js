
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const dbConfig = {
  host: "db", 
  user: "root",
  password: "password",
  database: "nodedb",
};

function initDatabase() {
  const connection = mysql.createConnection(dbConfig);
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;
  connection.query(createTableQuery, (err) => {
    if (err) {
      console.error("Erro ao criar a tabela:", err);
      setTimeout(initDatabase, 2000); 
      return;
    }
    console.log("Tabela 'people' verificada/criada com sucesso.");
    connection.end();
  });
}

const names = ['Fulano de Tal', 'Ciclano', 'Beltrano', 'John Doe', 'Jane Doe'];

app.get("/", (req, res) => {
  const connection = mysql.createConnection(dbConfig);
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const insertQuery = `INSERT INTO people (name) VALUES (?)`;

  connection.query(insertQuery, [randomName], (err, result) => {
    if (err) {
      console.error("Erro ao inserir nome:", err);
      connection.end();
      return res.status(500).send("Erro ao inserir nome no banco de dados.");
    }

    const selectQuery = `SELECT name FROM people`;
    connection.query(selectQuery, (err, results) => {
      connection.end();

      if (err) {
        console.error("Erro ao buscar nomes:", err);
        return res.status(500).send("Erro ao buscar nomes no banco de dados.");
      }

      let responseHtml = "<h1>Full Cycle Rocks!</h1>";
      responseHtml += "<ul>";
      results.forEach(person => {
        responseHtml += `<li>${person.name}</li>`;
      });
      responseHtml += "</ul>";

      res.send(responseHtml);
    });
  });
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
  initDatabase();
});