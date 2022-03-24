export default function Typescriptpage() {
  // 타입추론 : 형식을 지정안해줘도 aaa가 스트링으로 추론
  let aaa = '안녕하세요'
  aaa = 3

  // 타입명시
  let bbb: string = '반갑습니다'
  
  // 문자타입
  let ccc: string
  ccc= '반가워요'
  ccc = 3

  // 숫자타입
  let ddd: number = 10
  ddd = 'asdf'

  // boolean
  let eee: boolean = true

  // array
  let fff: string[] = ['철수',2];
  fff[0] = 0

  let ggg: number[]
  ggg[0] = 0
  
  let hhh: (number | string)[] = ['철수',2]

  // object 객체
  interface Iprofile {
    name: string,
    age: string | number
    school: string
    hobby?: string  //있어도 되고 없어도 되고
  }

  let profile: Iprofile = {
    name: '철수',
    age: 8,
    school : '다람쥐초등학교'
  }

  profile.age = '8'
  profile.school = 10

  //함수타입

  const add = (money1:number, money2:number, unit: string): string => { 
    return money1 + money2 + unit
  }

  
  const result: string =  add(1000, 2000, '원')
  const result2 =  add(1000, 2000, '원')


  return <div>타입스크립트 연습하기</div>
}