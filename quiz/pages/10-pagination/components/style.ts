import styled from '@emotion/styled'

export const ActivePage = styled.span`
  font-size: ${(props) => (props.current === true ? '30px;' : '20px')};
`
