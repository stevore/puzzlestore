const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const db = require('./config/connection');
// use graphql not routes
//const routes = require('./routes');

const cwd = process.cwd();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();


// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('puzzlestore')
  ? cwd.split('/puzzlestore/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes);
//app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, '../client/build/index.html'));
//});
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // Call the async function to start the server
  startApolloServer();
  