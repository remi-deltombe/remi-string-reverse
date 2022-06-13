/**
 * Reverse a string in a dedicated worker using WASM
 * @param input string to reverse
 * @returns input string reversed
 * @example
 *  // return 'olleH'
 *  await stringReverse('Hello')
 */
export async function stringReverse(input: string): Promise<string> {
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
}
