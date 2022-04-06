import { DataSource } from 'typeorm';
import { Products } from './Products.postgres';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Return
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Return {
    _id: String
    number: Int
    message: String
  }

  type Query {
    fetchProduct(productId: String): [ProductReturn]
    fetchProducts: [ProductReturn!]
  }

  type ProductReturn {
    _id: String
    seller: String
    name: String
    detail: String
    price: Int
    createdAt: String
  }
`;

const resolvers = {
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Products.insert({
        ...args,
        ...args.createProductInput,
      });
      return '등록했습니다';
    },
  },

  Query: {
    fetchProduct: async (_: any, args: any) => {
      const result = await Products.find({ where: { _id: args.productId } });
      console.log('fjdslakfjdl');
      return result;
    },
    fetchProducts: async () => {
      const result = await Products.find();
      console.log('fetchproducts');
      return result;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '34.64.124.189',
  port: 5003,
  username: 'postgres',
  password: 'postgres2021',
  database: 'postgres',
  entities: [Products],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('연결성공');
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log('연결실패');
  });
