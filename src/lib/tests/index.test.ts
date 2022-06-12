import { stringReverse } from '../index';

it('Runs without crashing', async () => {
  expect(await stringReverse('Hello')).toBe('olleH');
});
