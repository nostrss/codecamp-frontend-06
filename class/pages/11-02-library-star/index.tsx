import { Rate } from 'antd';
import { useState } from 'react';

export default function LibraryStarpage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  // onChange > 기존의 이벤트 핸들러가 아니다
  return <Rate onChange={handleChange} value={value} />;
}
