import { DataSource } from 'typeorm';
import { Board } from './Board.postgres';

// const { ApolloServer, gql } = require('apollo-server'); 이전 버전
import { ApolloServer, gql } from 'apollo-server';

// 1. 타입
// 여기는 graphql Type
const typeDefs = gql`
  # 들어가는 데이터는 input
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(witer: String, title: String, contents: String): String - 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String
  } # - 실제사용(backend06)
`;

// api
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터 베이스에 접속해서 게시물 가져오기
      const result = await Board.find();
      return result;
    },
  },
  // parent(api에서 api를 요청하는 경우가 발생할때 쓰는 데이터), args(정보), context(헤더,요약정보), info(기타정보)
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터 베이스에 접속해서 게시물 등록하기

      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.witer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // 수정하면?
      // Board.update({ writer: '철수' }, { title: '제목2' })

      // 삭제하면
      // Board.delete({ writer: '철수' }
      // Board.update({ writer: '철수' }, {deletedAt: new Date()});

      return '게시물을 등록했습니다';
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
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('연결성공');
    //백엔드 API를 오픈-리슨(24시간 동안 접속가능하게끔 대기상태로 만들어주기)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log('연결실패');
  });
