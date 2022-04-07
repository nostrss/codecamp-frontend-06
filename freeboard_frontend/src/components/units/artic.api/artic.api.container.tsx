import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticUI from './artic.api.presenter';

export default function ArticContainer() {
  const [articList, SetArticList] = useState();

  useEffect(() => {
    const getArticListData = async () => {
      const articListData = await axios.get(
        ' https://api.artic.edu/api/v1/artworks?limit=100'
      );
      SetArticList(articListData.data.data);
    };
    getArticListData();
  }, []);
  // console.log(articList);
  // console.log(articList?.config.iiif_url);
  // console.log(articList?.data[0].id);
  // console.log(articList?.data[0].artist_title);
  // console.log(articList?.data[0].image_id);
  // console.log(articList?.data[0].style_title);
  // console.log(articList?.data[0].publication_history);
  // console.log(articList?.data[0].gallery_title);

  // const onLoadMore = async () => {
  //   if (!articList) return;
  //   const articDataMore = await axios.get(
  //     ' https://api.artic.edu/api/v1/artworks?limit=10'
  //   );
  //   console.log(articDataMore.data.data);
  //   return SetArticList((prev) => ({
  //     prev,
  //     ...articDataMore.data.data,
  //   }));
  // };

  console.log(articList);

  return <ArticUI articList={articList} />;
  // onLoadMore={onLoadMore}
}
