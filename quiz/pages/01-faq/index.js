import styled from '@emotion/styled';

export default function Home() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const WrapperCanvas = styled.div`
    width: 640px;
    height: auto;
    background-color: white;
    border: 1px solid gray;
  `;

  const StatusBar = styled.div`
    width: 100%;
    height: 43px;
    background-color: rgba(0, 0, 0, 0.1);
  `;

  const WrapperHeader = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 50px;
  `;
  const AppBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    height: 60px;
    padding: 36px 0px;
  `;

  const SearchIcon = styled.img`
    width: 32px;
    height: 32px;
  `;

  const ProfileName = styled.span`
    width: 64px;
    height: auto;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: -0.8px;
    color: #1f1f1f;
  `;

  const ArrowRight = styled.img`
    height: 28px;
  `;
  const WrapperTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80px;
  `;

  const TopMenuTitle = styled.span`
    width: 360px;
    height: auto;
    font-family: SpoqaHanSans;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: -1.33px;
    color: #1f1f1f;
    padding: 2px 0px;
  `;

  const ProfileImg = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 10px;
  `;

  const WrapperTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80px;
  `;

  const TabButton = styled.button`
    width: auto;
    height: 48px;
    margin: 0px 20px 0px 0px;
    font-size: 30px;
    color: #cacaca;
    background-color: #fff;
    border: none;
  `;

  const TabButtonSelect = styled.button`
    width: auto;
    height: 48px;
    margin: 0px 20px;
    font-size: 30px;
    color: #ff1b6d;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #ff1b6d;
  `;

  const DevideLine = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #cacaca;
    margin: 20px 0px;
  `;

  const WrapperBody = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 50px;
  `;

  const FaqNumber = styled.summary`
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    color: #adadad;
    padding: 14px 0px;
  `;

  const FaqDetail = styled.span`
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
    color: greyish-brown;
  `;

  const NavBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 96px;
    border-top: 1px solid #dcdcdc;
    margin-top: 50px;
  `;

  const BottomItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: auto;
    padding: 5px 0px;
  `;

  const BottomIcon = styled.img`
    width: 58px;
  `;

  const BottomIconName = styled.span`
    width: auto;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    text-align: center;
    color: #adadad;
  `;

  const BottomIconNameSelect = styled.span`
    width: auto;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    text-align: center;
    color: #ff1b6d;
  `;

  const WrapperDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  `;

  const DetailContents = styled.details`
    width: 490px;
  `;

  const DetailTogle = styled.img`
    width: 60px;
    height: 60px;
  `;

  return (
    // html 쓰는곳
    <Wrapper>
      <WrapperCanvas>
        <StatusBar></StatusBar>
        <WrapperHeader>
          <AppBar>
            <SearchIcon src="/image/search.png" />
          </AppBar>
          <WrapperTop>
            <TopMenuTitle>마이</TopMenuTitle>
            <ProfileImg src="/image/img-60-profile-image@3x.png"></ProfileImg>
            <ProfileName>임정아</ProfileName>
            <ArrowRight src="/image/ic-28-arrow.svg"></ArrowRight>
          </WrapperTop>
          <WrapperTab>
            <TabButton>공지사항</TabButton>
            <TabButton>이벤트</TabButton>
            <TabButtonSelect>FAQ</TabButtonSelect>
            <TabButton>Q&A</TabButton>
          </WrapperTab>
        </WrapperHeader>
        <DevideLine></DevideLine>
        <WrapperBody>
          <WrapperDetail>
            <DetailContents open>
              <FaqNumber>Q.01</FaqNumber>
              <FaqDetail>리뷰 작성은 어떻게 하나요?</FaqDetail>
            </DetailContents>
            <DetailTogle src="/image/ic-70-arrow-right.svg" />
          </WrapperDetail>
          <WrapperDetail>
            <DetailContents open>
              <FaqNumber>Q.02</FaqNumber>
              <FaqDetail>리뷰 수정/삭제는 어떻게 하나요?</FaqDetail>
            </DetailContents>
            <DetailTogle src="/image/ic-70-arrow-right.svg" />
          </WrapperDetail>
          <WrapperDetail>
            <DetailContents open>
              <FaqNumber>Q.03</FaqNumber>
              <FaqDetail>아이디/비밀번호를 잊어버렸어요.</FaqDetail>
            </DetailContents>
            <DetailTogle src="/image/ic-70-arrow-right.svg" />
          </WrapperDetail>
          <WrapperDetail>
            <DetailContents open>
              <FaqNumber>Q.04</FaqNumber>
              <FaqDetail>회원탈퇴를 하고싶어요.</FaqDetail>
            </DetailContents>
            <DetailTogle src="/image/ic-70-arrow-right.svg" />
          </WrapperDetail>
          <WrapperDetail>
            <DetailContents open>
              <FaqNumber>Q.05</FaqNumber>
              <FaqDetail>출발지 설정은 어떻게 하나요?</FaqDetail>
            </DetailContents>
            <DetailTogle src="/image/ic-70-arrow-right.svg" />
          </WrapperDetail>
          <WrapperDetail>
            <DetailContents open>
              <FaqNumber>Q.06</FaqNumber>
              <FaqDetail>비밀번호를 변경하고 싶어요.</FaqDetail>
            </DetailContents>
            <DetailTogle src="/image/ic-70-arrow-right.svg" />
          </WrapperDetail>
        </WrapperBody>
        <NavBottom>
          <BottomItem>
            <BottomIcon src="/image/ic-58-main-home-unselected.svg"></BottomIcon>
            <BottomIconName>홈</BottomIconName>
          </BottomItem>
          <BottomItem>
            <BottomIcon src="/image/ic-58-main-location-unselected.svg"></BottomIcon>
            <BottomIconName>잇츠로드</BottomIconName>
          </BottomItem>
          <BottomItem>
            <BottomIcon src="/image/ic-58-main-like-unselected.svg"></BottomIcon>
            <BottomIconName>마이찜</BottomIconName>
          </BottomItem>
          <BottomItem>
            <BottomIcon src="/image/ic-58-main-my-selected.svg"></BottomIcon>
            <BottomIconNameSelect>마이</BottomIconNameSelect>
          </BottomItem>
        </NavBottom>
      </WrapperCanvas>
    </Wrapper>
  );
}
