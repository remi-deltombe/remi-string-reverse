declare type Promisifiable = (...args: any) => any;
declare type Promisify<F extends Promisifiable> = (...args: Parameters<F>) => Promise<ReturnType<F>>;
/**
 * Create a worker based on a given callback.
 * @param fn function to workerize
 * @returns A callable function that will run the fn in a worker
 */
export declare function createWorker<F extends Promisifiable>(fn: F): Promisify<F>;
export {};
