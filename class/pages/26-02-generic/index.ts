// 1. 문자타입
// 리턴도 문자타입

import { useState } from 'react';

const getString = (arg: string): string => {
  return arg;
};
getString('철수');

const result1 = getString('철수');

// 2. 숫자타입
const getNumber = (arg: number): number => {
  return arg;
};
getNumber(123);

const result2 = getNumber(123);

// 3. 문자 > 숫자
const getStringtoNumber = (arg: string): number => {
  return Number(arg);
};
getStringtoNumber('123');

const result = getStringtoNumber('123');

// 4. any 타입
const getAny2 = (arg: any): any => {
  return arg;
};

const result3_1 = getAny2('철수');
const result3_2 = getAny2(8);
const result3_3 = getAny2(true);

// 5. any 타입2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys('철수', '다람쥐초', 8);

// 6. generic 타입 (들어온 타입을 그대로 사용)
// 스트링이 들어오면 전체가 스트링이되고 리턴도 스트링
// 숫자가 들어오면 숫자가 되고..
// 불린이 들어오면 불린..
// 제네릭은 어떤 타입이 들어올지는 모르지만 다 같은 타입으로 사용하겠다는 점에서 any와 다르다.
// 제네릭은 리턴타입이 예측이 가능하다

function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = '철수';
const bbb: number = 8;
const ccc: boolean = true;

const result6_1 = getGeneric(aaa);
const result6_2 = getGeneric(bbb);
const result6_3 = getGeneric(ccc);

// 7 generic 타입2
// prettier-ignore
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenerics('철수', '다람쥐초', 8);

// 8 generic - 축약1
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1,arg2: T2,arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result8 = getGenericsT('철수', '다람쥐초', 8);

// 9 generic - 축약2
// prettier-ignore
function getGenericsTUV <T, U, V>(arg1: T, arg2:U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result9 = getGenericsTUV<string, string, number>('철수', '다람쥐초', 8);

// 10. usestate에서의 generic
const [school, setSchool] = useState<string>('다람쥐');

// 11. 화살표 함수에서의 generic
const first = <T, U, V>(arg1: T, arg2: U, arg3: V) => {
  third;
};
