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

  console.log(articList);

  return <ArticUI articList={articList} />;
}
