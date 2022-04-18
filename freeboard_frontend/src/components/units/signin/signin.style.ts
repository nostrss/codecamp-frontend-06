import styled from '@emotion/styled';

// 순서
// display
// list-style
// position
// float
// clear
// width/height
// padding/margin
// border/background
// color/font
// text-decoration
// text-align/vertical-align
// white-space
// other text
// content

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const SignUpWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  padding: 0px 8px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const SignUpTitleH1 = styled.h1`
  width: 100%;
  height: auto;
`;

export const SignUpItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const SignUpItemLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  font-size: 16px;
`;

export const SignUpItemInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 1px solid black;
  border-radius: 16px;
  font-size: 16px;
  padding: 20px 16px;
`;

export const SignUpItemBtn = styled.button`
  width: 100%;
  height: auto;
  border: 1px solid gray;
  margin-top: 40px;
  font-size: 20px;
  padding: 20px 16px;
  border-radius: 16px;
`;

export const Warning = styled.p`
  color: red;
  font-size: 12px;
`;
