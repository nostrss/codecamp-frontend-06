import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { useState } from 'react'


const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage() {
  const[checked, isChecked] = useState('')

  const checkList = [
    { id: 1},
    { id: 2},
    { id: 3},
  ];

  const checkBoxClick = function(event){
    console.log(event.target.value)
  }

  const checkAllclick = function(event){
    console.log(event.target.value)
    if (event.target.value === 'on') {
      isChecked = 'checked'
    }
  }






    return (
        <div>

                <Row>
                    <Column onChange={checkAllclick}><input type="checkbox" />전체</Column>
                    <Column onChange={checkBoxClick} isActive={checked}><input type="checkbox" />1</Column>
                    <Column onChange={checkBoxClick}><input type="checkbox" />2</Column>
                    <Column onChange={checkBoxClick}><input type="checkbox" />3</Column>
                </Row>
        </div>
    )

}