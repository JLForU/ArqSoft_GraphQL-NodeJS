const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Definir el esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Configurar resolvers
const root = {
  hello: () => 'Hola, mundo!',
};

// Crear una aplicación Express
const app = express();

// Montar el punto final GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Habilitar GraphiQL para probar las consultas
}));

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor GraphQL en funcionamiento en http://localhost:${port}/graphql`);
});
