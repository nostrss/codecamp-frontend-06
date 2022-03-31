import styled from '@emotion/styled';

export default function Board(props) {
  const MyRow = styled.div`
    display: flex;
    font-size: 20px;
  `;

  const MyColumn = styled.div`
    width: 25%;
    font-size: 13px;
  `;

  return (
    <div>
      {props.data?.fetchBoards.map((el, index) => (
        <MyRow key={el._id}>
          <MyColumn>{index}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
