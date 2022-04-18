import * as U from './signup.style';
import { ISingnUpPresenter } from './signup.type';

export default function SignUpUI(props: ISingnUpPresenter) {
  return (
    <U.WrapperDiv>
      <form>
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
              <U.SignUpItemLabel htmlFor='name'>이름</U.SignUpItemLabel>
              <U.SignUpItemInput
                onChange={props.onChangeUseName}
                type='text'
                placeholder='이름을 입력해주세요'
                id='name'
                required
              />
            </U.SignUpItemDiv>
            <U.SignUpItemDiv>
              <U.SignUpItemLabel htmlFor='password'>비밀번호</U.SignUpItemLabel>
              <U.SignUpItemInput
                onChange={props.onChangePassword1}
                type='password'
                placeholder='비밀번호를 입력해주세요'
                id='password'
                required
              />
            </U.SignUpItemDiv>

            <U.SignUpItemDiv>
              <U.SignUpItemLabel htmlFor='password2'>
                비밀번호
              </U.SignUpItemLabel>
              <U.SignUpItemInput
                onChange={props.onChangePassword2}
                type='password'
                placeholder='비밀번호를 입력해주세요'
                id='password2'
                required
              />
            </U.SignUpItemDiv>
            <U.SignUpItemDiv>
              <U.SignUpItemBtn onClick={props.onClickSignUp} type='button'>
                회원가입하기
              </U.SignUpItemBtn>
            </U.SignUpItemDiv>
          </U.SignUpForm>
        </U.SignUpWrapperDiv>
      </form>
    </U.WrapperDiv>
  );
}
