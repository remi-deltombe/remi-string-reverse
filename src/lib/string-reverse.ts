// @ts-ignore
import stringReverseWasm from "../wasm/string-reverse.wasm";
import { instanciateBase64DataUrl } from "./wasm-utils";

/**
 * Reverse a string in a dedicated worker using WASM
 * @param input string to reverse
 * @returns input string reversed
 * @example
 *  // return 'olleH'
 *  await stringReverse('Hello')
 */
export async function stringReverse(input: string): Promise<string> {
  const instance = await instanciateBase64DataUrl(stringReverseWasm);
  const memory = instance.exports.memory as WebAssembly.Memory;
  const fn = instance.exports.stringReverse as CallableFunction;

  const array = new Uint8Array(memory.buffer, 0, input.length);
  for (let i = 0; i < input.length; ++i) {
    array[i] = input.charCodeAt(i);
  }
  fn(input.length, array.byteOffset);
  return new TextDecoder("utf8").decode(array);
}
