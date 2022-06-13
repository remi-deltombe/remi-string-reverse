// @ts-ignore
import * as wasm from "../wasm/string-reverse.wasm";

/**
 * Reverse a string in a dedicated worker using WASM
 * @param input string to reverse
 * @returns input string reversed
 * @example
 *  // return 'olleH'
 *  await stringReverse('Hello')
 */
export async function stringReverse(input: string): Promise<string> {
  /*
  return new Promise((r) => {
    const worker = new Worker(
      new URL("./string-reverse.worker.ts", import.meta.url)
    );

    worker.onmessage = () => {
      // worker is ready to be used
      worker.postMessage(input);
      worker.onmessage = (e: MessageEvent<string>) => {
        r(e.data);
        worker.terminate();
      };
    };
    worker.onmessageerror = (e: any) => {
      console.log("ERROR", e);
    };
  });
  */

  // prepare memory
  const { memory } = wasm;
  const array = new Uint8Array(memory.buffer, 0, input.length);
  for (let i = 0; i < input.length; ++i) {
    array[i] = input.charCodeAt(i);
  }
  // call string reverse and notify result
  wasm.stringReverse(input.length, array.byteOffset);
  return new TextDecoder("utf8").decode(array);
}
