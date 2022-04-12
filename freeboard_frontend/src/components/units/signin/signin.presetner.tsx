import * as U from './signin.style';
import { ISingninPresenter } from './signin.type';

export default function SignInUI(props: ISingninPresenter) {
  return (
    <U.WrapperDiv>
      <U.SignUpWrapperDiv>
        <U.SignUpForm id='signup'>
          <U.SignUpTitleH1>회원가입</U.SignUpTitleH1>

          <U.SignUpItemDiv>
            <U.SignUpItemLabel htmlFor='email'>이메일</U.SignUpItemLabel>
            <U.SignUpItemInput
              onChange={props.onChangeEmail}
              type='email'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$'
              placeholder='이메일을 입력해주세요'
              id='email'
              required
            />
          </U.SignUpItemDiv>

          <U.SignUpItemDiv>
            <U.SignUpItemLabel htmlFor='password'>비밀번호</U.SignUpItemLabel>
            <U.SignUpItemInput
              onChange={props.onChangePassword}
              type='password'
              placeholder='비밀번호를 입력해주세요'
              id='password'
              required
            />
          </U.SignUpItemDiv>

          <U.SignUpItemDiv>
            <U.SignUpItemBtn type='button' onClick={props.onClickSignin}>
              로그인
            </U.SignUpItemBtn>
          </U.SignUpItemDiv>
        </U.SignUpForm>
      </U.SignUpWrapperDiv>
    </U.WrapperDiv>
  );
}
