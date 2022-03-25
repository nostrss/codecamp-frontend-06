export default function Typescriptpage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. pick타입
  type Mytype1 = Pick<IProfile, "name" | "age">;

  // 2. omit 타입

  type Mytype2 = Omit<IProfile, "school">;

  // 3. partial 타입 전부 물음표로
  type Mytype3 = Partial<IProfile>;

  // 4. required 타입 전부 필수로
  type Mytype4 = Required<IProfile>;

  // 5. record 타입
  type ZZZ = "aaa" | "qqq" | "rrr"; //union 타입

  let apple: ZZZ;
  // apple = "aaa"  //유니온타입만 들어갈 수 있다

  type Mytype5 = Record<ZZZ, IProfile>;

  // ============ 추가(선언병합) ============
  // type은 한번 만들고 끝, interface는 여러번?
  interface IProfile {
    candy: number;
  }

  let profile: IProfile;
  profile = {
    candy: 3,
    age: 10,
    hobby: "fdfs",
  };

  return <div>타입스크립트 연습하기</div>;
}
