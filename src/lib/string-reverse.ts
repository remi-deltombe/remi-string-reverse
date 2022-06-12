import { createWorker } from "./create-worker";

export async function stringReverse(input: string): Promise<string> {
  const worker = createWorker((input: string) => {
    return input.split("").reverse().join("");
  });
  return worker(input);
}
