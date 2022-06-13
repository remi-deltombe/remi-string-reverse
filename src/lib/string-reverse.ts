// @ts-ignore
import wasm from "../wasm/string-reverse.wasm";
/**
 * Reverse a string in a dedicated worker using WASM
 * @param input string to reverse
 * @returns input string reversed
 * @example
 *  // return 'olleH'
 *  await stringReverse('Hello')
 */
export async function stringReverse(input: string): Promise<string> {
  // prepare memory
  const source = wasm.split("data:application/wasm;base64,")[1];
  const binary_string = atob(source);
  const len = binary_string.length;
  const buffer = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buffer[i] = binary_string.charCodeAt(i);
  }

  const { instance } = await WebAssembly.instantiate(buffer, {});
  const memory = instance.exports.memory as any;
  const fn = instance.exports.stringReverse as CallableFunction;

  console.log(memory);
  const array = new Uint8Array(memory.buffer, 0, input.length);
  for (let i = 0; i < input.length; ++i) {
    array[i] = input.charCodeAt(i);
  }
  fn(input.length, array.byteOffset);
  return new TextDecoder("utf8").decode(array);
}
