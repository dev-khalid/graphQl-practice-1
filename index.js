import express from 'express'; 
import resolvers from './resolver';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express(); 

const root = resolvers; 
app.use('/graphql',graphqlHTTP({
  schema:schema, 
  rootValue: root,
  graphiql: true
}))

const PORT = 5000; 
app.listen(PORT,()=> { 
  console.log(`Server is running on port ${PORT}`); 
})