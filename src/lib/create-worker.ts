type Promisifiable = (...args: any) => any;
type Promisify<F extends Promisifiable> = (
  ...args: Parameters<F>
) => Promise<ReturnType<F>>;

/**
 * Create a worker based on a given callback.
 * @param fn function to workerize
 * @returns A callable function that will run the fn in a worker
 */
export function createWorker<F extends Promisifiable>(fn: F): Promisify<F> {

  if (Worker) {
    const source = `
        const fn = ${fn.toString()};
        onmessage = (e)=> postMessage(fn(...e.data))
    `;

    let resolver: (result: ReturnType<F>) => void;
    const worker = new Worker(
      "data:application/javascript," + encodeURIComponent(source)
    );

    worker.onmessage = (e: MessageEvent<ReturnType<F>>) => {
      if (resolver) {
        resolver(e.data as any);
        worker.terminate();
      }
    };
    return (...args: Parameters<F>) => {
      worker.postMessage(args);
      return new Promise((r) => (resolver = r));
    };
  }
  return fn;
}
