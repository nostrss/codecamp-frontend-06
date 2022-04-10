import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from 'firebase/firestore/lite';
import { app } from '../_app';

// firebase database 생성 console message

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 5, 9);
//     }
//   }
// }
// 테스트 모드의 기본 보안 규칙에서는 데이터베이스 참조 사용자는 누구나 향후 30일 동안 데이터베이스의 모든 데이터를 보고 수정하며 삭제할 수 있습니다.

// firestore database에 컬렉션 생성 board

export default function firebasePage() {
  const onClickSubmit = async () => {
    const board = collection(getFirestore(app), 'board');
    await addDoc(board, {
      wirter: '포트폴리오',
      title: '제목입니다',
      contents: '내용입니다',
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(app), 'board');
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data);
    console.log(datas);
  };

  return (
    <div>
      <div>파이어베이스 연습</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </div>
  );
}
