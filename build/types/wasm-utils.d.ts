/**
 * Convert a base64 string to an ArrayBuffer
 * @param base64 string to convert
 * @returns ArrayBuffer filled with string content
 */
export declare function base64ToBuffer(base64: string): ArrayBuffer;
/**
 * Instanciate a wasm program based on a string encoded in base64
 * @param url base64 data url
 * @returns instanciated program
 */
export declare function instanciateBase64(base64: string): Promise<WebAssembly.Instance>;
/**
 * Instanciate a wasm program based on a data url encoded in base64
 * @param url base64 data url
 * @returns instanciated program
 */
export declare function instanciateBase64DataUrl(url: string): Promise<WebAssembly.Instance>;
