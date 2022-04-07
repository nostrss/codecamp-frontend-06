import { DataSource, IsNull } from 'typeorm';
import { Products } from './Products.postgres';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Return
    updateProduct(
      productId: String
      updateProductInput: UpdateProductInput!
    ): Return
    deleteProduct(productId: ID): Return
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
  input UpdateProductInput {
    name: String
    detail: String
    price: Int
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
    updateProduct: async (_: any, args: any) => {
      await Products.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );
      return '수정했습니다';
    },
    deleteProduct: async (_: any, args: any) => {
      await Products.update(
        { _id: args.productId },
        { deletedAt: new Date(), isDelete: true }
      );
      return '삭제했습니다';
    },
  },

  Query: {
    fetchProduct: async (_: any, args: any) => {
      const result = await Products.find({ where: { _id: args.productId } });

      return result;
    },
    fetchProducts: async () => {
      const result = await Products.find({ where: { isDelete: false } });
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
