import axios from 'axios';
import { useEffect, useState } from 'react';

export default function OpenApiWithUseEffect() {
  const [dogUrl, SetDogUrl] = useState([]);

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get('https://dog.ceo/api/breed/hound/images');
      SetDogUrl(result.data.message);
    };
    aaa();
  }, []);

  console.log(dogUrl);

  return (
    <div>
      <div>오픈 api 연습</div>
      {dogUrl.map((el, index) => (
        <img src={el} />
      ))}
    </div>
  );
}
