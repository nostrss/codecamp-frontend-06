import axios from 'axios';
import { useEffect, useState } from 'react';

export default function OpenApiWithUseEffect() {
  const [dogUrl, SetDogUrl] = useState('');
  const [artic, Setartic] = useState([]);

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random');
      SetDogUrl(result.data.message);
    };
    aaa();
  }, []);

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get(
        ' https://api.artic.edu/api/v1/artworks?limit=2'
      );
      Setartic(result.data);
    };
    aaa();
  }, []);
  console.log(artic);

  return (
    <div>
      <div>오픈 api 연습</div>
      <img src={dogUrl} />
      {/* {artic.map((el) => (
        <img src={el.api_link} />
      ))} */}
    </div>
  );
}
