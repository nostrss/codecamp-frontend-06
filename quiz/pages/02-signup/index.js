import { useState } from 'react';
import { Wrapper, Title, InputBox,PhoneWrapper,PhoneNum,TokenWrapper,Token,TokenButton, Timer, ConfirmButton, SelectLocation, LocationWrapper,RadioWrapper,RadioItem, SubmitWrapper, SubmitButton, Warning  } from '../../styles/signup';


export default function signUp() {

  const [random, setRandom] = useState("000000");
  function stateRandom() {
    setRandom(String(Math.floor(Math.random()*1000000)).padStart(6,0));
  }

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }
    function onChangePassword2(event){
      setPassword2(event.target.value)
  }

    function onClickSignup(){
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다")
        } 
        
        if(password !== password2){
          setPasswordError("비밀번호가 일치하지 않습니다")
        } 
    }

  return (
    <Wrapper>
      <Title>코드캠프 회원가입</Title>
      <InputBox type="email" placeholder='이메일을 입력해주세요' onChange={onChangeEmail} ></InputBox>
      <Warning>{emailError}</Warning>
      <InputBox type="text" placeholder='이름을 입력해주세요'></InputBox>
      <InputBox type="password" placeholder='비밀번호를 입력해주세요'onChange={onChangePassword}></InputBox>
      <Warning>{passwordError}</Warning>
      <InputBox type="password" placeholder='비밀번호를 다시 입력해주세요' onChange={onChangePassword2}></InputBox>
      <Warning>{passwordError}</Warning>
      <PhoneWrapper>
      <PhoneNum maxLength="3"></PhoneNum> -
      <PhoneNum maxLength="4"></PhoneNum> -
      <PhoneNum maxLength="4"></PhoneNum>
      </PhoneWrapper>
      <TokenWrapper>
        <Token>{random}</Token>
        <TokenButton onClick={stateRandom}>인증번호전송</TokenButton>
      </TokenWrapper>
      <TokenWrapper>
        <Timer>3:00</Timer>
        <ConfirmButton>인증완료</ConfirmButton>
      </TokenWrapper>
      <LocationWrapper>
        <SelectLocation>
          <option disabled selected>지역을 선택하세요</option>
          <option>서울</option>
          <option>경기</option>
          <option>인천</option>
        </SelectLocation>
      </LocationWrapper>
      <RadioWrapper>
        <RadioItem>
          <input type="radio" name="gender" /> 여성
        </RadioItem>
        <RadioItem>
          <input type="radio" name="gender" /> 남성
        </RadioItem>
      </RadioWrapper>
      <SubmitWrapper>
        <SubmitButton onClick={onClickSignup}>가입하기</SubmitButton>
      </SubmitWrapper>
    </Wrapper>
  );
}