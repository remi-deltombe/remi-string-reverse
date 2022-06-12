import { stringReverse } from '../index';
export default class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {};
  }

  postMessage(msg) {
    this.onmessage(msg);
  }
}

it('Runs without crashing', async () => {
  expect(await stringReverse('Hello')).toBe('olleH');
});
