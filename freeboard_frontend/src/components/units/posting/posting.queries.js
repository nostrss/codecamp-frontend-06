import { gql } from '@apollo/client'


export const SEND_CONTENTS = gql`
  mutation mutationPost($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`
