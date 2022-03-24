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

export const PostBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
`;

export const PostBodyTitle = styled.h2`
width: 100%;
height: auto;
padding-top: 80px;
font-size: 36px;
text-align: left;
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

export const WrapComment = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;


export const CommentHeader = styled.div`
  display :flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  display: flex;
  border-top : 1px solid #bdbdbd;
`;


// export const CommentInputs = styled(ColumnWrapper)`
//   padding: 0px;
// `;


export const CommentInfo = styled(RowWrapper)`
	justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-bottom: 20px;
`;

export const CommentInfoInput = styled.input`
	width: 180px;
  height: 52px;
  margin-right: 24px;
  padding : 14px 20px;
  font-size: 16px;
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction : row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding-right: 10px;
`
export const TextareaWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  border: 1px solid gray;
  padding: 20px 20px;
`
export const CommentContents = styled.textarea`
	width: 100%;
  height: 160px;
  border: none;
  resize: none;
`;

export const CountTextLength = styled.p`
width: 43px;
height: 24px;
font-size: 16px;
line-height: 24px;
color: #BDBDBD;
`
export const SubmitComment= styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 16px;
width: 91px;
height: 52px;
background-color: #000000;
color: white;
`


export const CommentList = styled.div`
	display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const CommentItem = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
  height: auto;
  border-bottom: 1px gray solid;
  padding: 20px 0px;
`
export const RowItems = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`

export const RowSpaceBetween = styled(RowItems)`
justify-content : space-between;  
`
export const RowFlexStart = styled(RowItems)`
justify-content : flex-start;  
`
export const RowAlignCenter = styled(RowItems)`
align-items : center;  
`


export const CommentName = styled.span`
display: inline-block;
width: auto;
height: 24px;
vertical-align: bottom;
font-size: 16px;
line-height: 24px;
padding-right: 20px;
`;

export const ColumnItems = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-left: 20px;
`
export const UserComments = styled.p`
width: 100%;
height: auto;
color: #4F4F4F;
`
export const UserCommentsDate = styled.p`
width: 100%;
height: auto;
font-size: 12px;
color: #BDBDBD;
`
export const IconBox = styled.div`
  display: flex;
  flex-direction : row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding-right: 10px;
`