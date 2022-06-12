/**
 * Reverse a string in a dedicated worker using WASM
 * @param input string to reverse
 * @returns input string reversed
 * @example
 *  // return 'olleH'
 *  await stringReverse('Hello')
 */
export declare function stringReverse(input: string): Promise<string>;
