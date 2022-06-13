/**
 * Convert a base64 string to an ArrayBuffer
 * @param base64 string to convert
 * @returns ArrayBuffer filled with string content
 */
export function base64ToBuffer(base64: string): ArrayBuffer {
  const binaries = atob(base64);
  const { length } = binaries;
  const buffer = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    buffer[i] = binaries.charCodeAt(i);
  }
  return buffer;
}

/**
 * Instanciate a wasm program based on a string encoded in base64
 * @param url base64 data url
 * @returns instanciated program
 */
export async function instanciateBase64(
  base64: string
): Promise<WebAssembly.Instance> {
  const sourceBuffer = base64ToBuffer(base64);
  const { instance } = await WebAssembly.instantiate(sourceBuffer, {});
  return instance;
}

/**
 * Instanciate a wasm program based on a data url encoded in base64
 * @param url base64 data url
 * @returns instanciated program
 */
export function instanciateBase64DataUrl(
  url: string
): Promise<WebAssembly.Instance> {
  const base64 = url.split("data:application/wasm;base64,")[1];
  return instanciateBase64(base64);
}
