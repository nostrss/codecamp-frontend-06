import * as P from './comment.style';
import { FaCommentAlt, FaStar } from 'react-icons/fa';
import { Wrapper, ColumnWrapper } from '../posting/posting.style';
import { IFetchCommentData } from './comment.type';
import { Fragment } from 'react';

export default function PostCommentUI(props: IFetchCommentData) {
  return (
    <Wrapper>
      <P.WrapComment>
        <P.CommentHeader>
          <FaCommentAlt color='#FFD600'></FaCommentAlt> 댓글
        </P.CommentHeader>
        <ColumnWrapper>
          <P.CommentInfo>
            <P.CommentInfoInput
              type='text'
              placeholder='작성자'
              onChange={props.onChangeWriter}
              value={props.writer}
            ></P.CommentInfoInput>
            <P.CommentInfoInput
              type='password'
              placeholder='비밀번호'
              onChange={props.onChangePw}
              value={props.password}
            ></P.CommentInfoInput>
            <P.CommentInfoInput
              type='number'
              placeholder='rating'
              onChange={props.onChangeRating}
              value={props.rating}
            ></P.CommentInfoInput>

            {/* <P.StarBox>
              <FaStar color='grey' size='24'></FaStar>
            </P.StarBox>
            <P.StarBox>
              <FaStar color='grey' size='24'></FaStar>
            </P.StarBox>
            <P.StarBox>
              <FaStar color='grey' size='24'></FaStar>
            </P.StarBox>
            <P.StarBox>
              <FaStar color='grey' size='24'></FaStar>
            </P.StarBox>
            <P.StarBox>
              <FaStar color='grey' size='24'></FaStar>
            </P.StarBox> */}
          </P.CommentInfo>
          <P.TextareaWrap>
            <P.CommentContents
              onChange={props.onChangeComment}
              maxLength={props.textLimit}
              placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
              value={props.comment}
            ></P.CommentContents>
            <P.RowSpaceBetween>
              <P.CountTextLength>{props.comment.length}/100</P.CountTextLength>
              <P.SubmitComment onClick={props.onClickSubmitComment}>
                등록하기
              </P.SubmitComment>
            </P.RowSpaceBetween>
          </P.TextareaWrap>
        </ColumnWrapper>
        <ColumnWrapper>
          <P.CommentList>
            <P.CommentItem>
              {props.fetchCommentData?.data?.fetchBoardComments.map((item) => (
                <P.RowItems key={item.createdAt}>
                  {props?.commentId === item._id || (
                    <Fragment>
                      <P.Profileimage src='/image/user.png'></P.Profileimage>
                      <P.RowSpaceBetween>
                        <P.ColumnItems>
                          <P.RowAlignCenter>
                            <P.CommentName>{item.writer}</P.CommentName>
                            <P.RowItems>
                              <P.StarBox>
                                <FaStar color='grey' size='24'></FaStar>
                              </P.StarBox>
                              <P.StarBox>
                                <FaStar color='grey' size='24'></FaStar>
                              </P.StarBox>
                              <P.StarBox>
                                <FaStar color='grey' size='24'></FaStar>
                              </P.StarBox>
                              <P.StarBox>
                                <FaStar color='grey' size='24'></FaStar>
                              </P.StarBox>
                              <P.StarBox>
                                <FaStar color='grey' size='24'></FaStar>
                              </P.StarBox>
                            </P.RowItems>
                          </P.RowAlignCenter>
                          <P.UserComments>{item.contents}</P.UserComments>
                          <P.UserCommentsDate>
                            {item.createdAt}
                          </P.UserCommentsDate>
                        </P.ColumnItems>
                        <P.RowItems>
                          <P.IconBox>
                            <button
                              id={item._id}
                              onClick={props.onClickEditComment}
                            >
                              수정하기
                            </button>
                            {/* <FaPen color='grey' size='24'></FaPen> */}
                          </P.IconBox>
                          <P.IconBox>
                            <button
                              id={item._id}
                              onClick={props.onClickDeleteComment}
                            >
                              {' '}
                              삭제버튼
                              {/* <FaTimes color='grey' size='24'></FaTimes> */}
                            </button>
                          </P.IconBox>
                        </P.RowItems>
                      </P.RowSpaceBetween>
                    </Fragment>
                  )}
                  {props.commentId === item._id && (
                    <ColumnWrapper>
                      <P.CommentInfo>
                        <P.CommentInfoInput
                          type='text'
                          placeholder='작성자'
                          onChange={props.onChangeWriter}
                          defaultValue={String(item.writer)}
                          readOnly={!!item.writer}
                        ></P.CommentInfoInput>
                        <P.CommentInfoInput
                          type='password'
                          placeholder='비밀번호'
                          onChange={props.onChangePw}
                        ></P.CommentInfoInput>
                        <P.CommentInfoInput
                          type='number'
                          placeholder='rating'
                          onChange={props.onChangeRating}
                          defaultValue={item.rating}
                        ></P.CommentInfoInput>

                        {/* <P.StarBox>
                        <FaStar color='grey' size='24'></FaStar>
                      </P.StarBox>
                      <P.StarBox>
                        <FaStar color='grey' size='24'></FaStar>
                      </P.StarBox>
                      <P.StarBox>
                        <FaStar color='grey' size='24'></FaStar>
                      </P.StarBox>
                      <P.StarBox>
                        <FaStar color='grey' size='24'></FaStar>
                      </P.StarBox>
                      <P.StarBox>
                        <FaStar color='grey' size='24'></FaStar>
                      </P.StarBox> */}
                      </P.CommentInfo>
                      <P.TextareaWrap>
                        <P.CommentContents
                          onChange={props.onChangeComment}
                          maxLength={props.textLimit}
                          placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                          defaultValue={String(item.contents)}
                        ></P.CommentContents>
                        <P.RowSpaceBetween>
                          <P.CountTextLength>
                            {props.comment.length}/100
                          </P.CountTextLength>
                          <P.SubmitComment
                            id={item._id}
                            onClick={props.onClickSubmitEdit}
                          >
                            수정완료
                          </P.SubmitComment>
                        </P.RowSpaceBetween>
                      </P.TextareaWrap>
                    </ColumnWrapper>
                  )}
                </P.RowItems>
              ))}
            </P.CommentItem>
          </P.CommentList>
        </ColumnWrapper>
      </P.WrapComment>
    </Wrapper>
  );
}
