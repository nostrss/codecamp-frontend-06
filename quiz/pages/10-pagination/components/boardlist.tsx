import styled from '@emotion/styled'

export default function Board(props) {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
  `

  const MyRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: 20px;
  `

  const MyColumn = styled.div`
    width: 100px;
    font-size: 16px;
  `
  const MyTitle = styled.div`
    width: 100%;
    font-size: 16px;
  `

  return (
    <Wrapper>
      {props.data?.fetchBoards.map((el, index) => (
        <MyRow key={el._id}>
          <MyColumn>{index + 1}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyTitle>{el.title}</MyTitle>
        </MyRow>
      ))}
    </Wrapper>
  )
}
