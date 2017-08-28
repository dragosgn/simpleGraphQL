var { graphql, buildSchema} = require('graphql')

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

graphql(schema, '{hello}', root).then((response) => {
  console.log(response)
})
