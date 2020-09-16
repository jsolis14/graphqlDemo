const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');

mongoose.connect('mongodb://Jesse:password@localhost/gql-ninja', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Succesfully connected to database')
});

const app = express();
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
// }))


app.use(cors())
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen(4000, () => { console.log("Listening on port 4000") });
