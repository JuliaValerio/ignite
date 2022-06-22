import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ppm8y924i701xt2wqx2pj1/master',
  cache: new InMemoryCache()
});