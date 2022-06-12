import Worker from "./string-reverse.worker";

export async function stringReverse(input: string): Promise<string> {
  return new Promise((r) => {
    const worker = Worker();
    worker.onmessage = (e: MessageEvent<string>) => {
      r(e.data);
    };
    worker.postMessage(input);
  });
}
