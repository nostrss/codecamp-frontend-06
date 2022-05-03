import { add } from '../../pages/34-01-jest';
it('더하기 잘되는지 테스트 해보기', () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
