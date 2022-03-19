import styled from '@emotion/styled';
import { RowWrapper } from './emotion';

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
display : flex;
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
height: 100%px;
vertical-align: bottom;

`;

export const PostCreatedAt = styled.span`
display: inline-block;
width: 100%;
height: 100%px;
vertical-align: bottom;
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

export const PostBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
`;

export const PostBodyTitle = styled.div`
width: 100%;
height: 54px;
text-align: left;
`;

export const PostBodyImg = styled.img`
width: 100%;
height: 400px;
background-color: gray;
`;

export const PostBodySection = styled.section`
width: 100%;
height: auto;
`;

export const PostBodyText = styled.p`
width: 100%;
height: auto;
`;

// body css end
// fooger begin

export const PostFooter = styled.div`
width: 100%;
height: 100px;
`;

export const PostLikes = styled.div`
display : flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 100px;
`;



export const PostLikeItem = styled.div`
display : flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
`;

export const PostLikeCounts = styled.div`
display : flex;
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
padding: 14px 60px;
border: 1px solid #BDBDBD;
background-color: #fff;
margin: 0px 12px;
`;

export const PostComment = styled.div`
width: 100%;
height: 100px;
border: 1px solid black;
`;