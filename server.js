var express = require('express')
var graphqlHTTP = require('express-graphql')
var {buildSchema} = require('graphql')

// Constructing schema using GraphQl schema language

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// the root will provide a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  }
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
