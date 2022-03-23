
import { gql } from '@apollo/client'

export const CREAT_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`
export const UPDATE_BOARD = gql`
  mutation updateBoard($number: Int) {
    updateBoard(number: $number) {
      _id
      number
      message
    }
  }
`
