import styled from '@emotion/styled';
import { RowWrapper } from '../posting/posting.style';

// 모질라 CSS속성 작성 순서
// 1. display
// 2. list-style
// 3. position
// 4. float
// 5. clear
// 6. width/height
// 7. padding/margin
// 8. border/background
// 9. color/font
// 10. text-decoration
// 11. taxt-align/vertical-align
// 12. white-space
// 13. other text
// 14. content

// header css begin
export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
`;

export const PostProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
`;

export const Profileimage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ProfileName = styled.span`
  display: inline-block;
  width: 100%;
  height: auto;
  vertical-align: bottom;
  font-size: 24px;
`;

export const PostCreatedAt = styled.span`
  display: inline-block;
  width: 100%;
  height: auto;
  vertical-align: bottom;
  font-size: 16px;
  color: #828282;
`;

export const PostInfo = styled.div`
  width: 20%;
  height: 100px;
`;

export const InfoItem = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 30px;
`;

export const RowPostInfo = styled(RowWrapper)`
  justify-content: end;
  align-items: center;
  height: 100%;
  padding: 0px;
`;

// header css end
// body css begin

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexRowTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: auto;
`;

export const PostBodyTitle = styled.h2`
  width: 100%;
  height: auto;
  text-align: left;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
  margin: 0px;
`;

export const H3 = styled.h3`
  width: auto;
  height: auto;
  text-align: left;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  margin: 0px 20px 0px 0px;
`;

export const PostBodyImg = styled.img`
  width: 100%;
  height: auto;
  background-color: gray;
`;

export const PostBodySection = styled.section`
  width: 100%;
  height: auto;
`;

export const PostBodyText = styled.p`
  width: 100%;
  height: auto;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

// body css end
// fooger begin

export const PostFooter = styled.div`
  width: 100%;
  height: 100px;
`;

export const PostLikes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const PostLikeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const PostLikeBtn = styled.img`
  width: 40px;
  height: 40px;
`;

export const PostDislikeBtn = styled.img`
  width: 40px;
  height: 40px;
`;

export const PostLikeCounts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const PostBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const PostBtnItem = styled.button`
  width: 180px;
  height: 45px;
  padding: 13px 30px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  margin: 0px 12px;
  font-size: 18px;
  line-height: 24px;
  :hover {
    border: 3px solid black;
    font-weight: 700px;
  }
`;

export const ColumnItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const SliderWrapper = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SliderItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const SliderImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
