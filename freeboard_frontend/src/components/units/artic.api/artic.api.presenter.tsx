import { Fragment } from 'react';
import * as A from './artic.api.syle';

export default function ArticUI(props: any) {
  return (
    <>
      <A.WrapperTitle>
        <A.Title> Art Institute of Chicago</A.Title>
      </A.WrapperTitle>
      <A.Wrapper>
        {props.articList?.map((el: any) => (
          <Fragment key={el.id}>
            <A.ArticItem>
              <A.ArticImage
                src={`https://www.artic.edu/iiif/2/${el.image_id}/full/400,/0/default.jpg`}
              />
              <A.ArticTitle>{el.title}</A.ArticTitle>
              <A.ArticText>{el.artist_title}</A.ArticText>
              <A.ArticText>{el.style_title}</A.ArticText>
            </A.ArticItem>
          </Fragment>
        ))}
      </A.Wrapper>
    </>
  );
}
