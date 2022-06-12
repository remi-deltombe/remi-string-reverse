import Worker from "./string-reverse.worker";

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
    const worker = Worker();

    worker.onmessage = () => {
      // worker is ready to be used
      worker.postMessage(input);
      worker.onmessage = (e: MessageEvent<string>) => {
        r(e.data);
        worker.terminate();
      }
    };
    worker.onmessageerror = (e:any)=>{
      console.log('ERROR', e)
    }
  });
}
