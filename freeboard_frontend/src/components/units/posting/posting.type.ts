import { ChangeEvent } from 'react'

export interface IPostingUIProps {
  onChangeName : (event: ChangeEvent<HTMLInputElement>) => void
  onChangePw : (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle : (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents : (event: ChangeEvent<HTMLInputElement>) => void
  submitContents: () => void
  nameError? : string
  passwordError? : string
  titleError? : string 
  contentsError? : string
}


export interface ICreateBoardApi {
  writer : string
  password : string
  title : string
  contents : string
}