import { ErrorRepository, ErrorRepositoryMap } from '../user';

test('add error 1', () => {
  new ErrorRepository().addError(1, 'error one');
  expect(ErrorRepositoryMap.size).toBe(1);
});

test('add error 2', () => {
  new ErrorRepository().addError(2, 'error two');
  expect(ErrorRepositoryMap.size).toBe(2);
});

test('get translate error 1', () => {
  const res = new ErrorRepository().translate(1);
  expect(res).toBe('error one');
});

test('get unknown error 0', () => {
  const res = new ErrorRepository().translate(0);
  expect(res).toBe('Unknown error');
});
