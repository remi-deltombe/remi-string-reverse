import * as wasm from '../wasm/string-reverse.wasm';

/**
 * Web worker used to call wasm with input to reverse
 */

self.onmessage = (e: MessageEvent<string>) => {
  // prepare memory
  const input = e.data;
  const { memory } = wasm;
  const array = new Uint8Array(memory.buffer, 0, input.length);
  for(let i=0; i<input.length; ++i) {
    array[i] = input.charCodeAt(i);
  }
  // call string reverse and notify result
  wasm.stringReverse(input.length, array.byteOffset);
  postMessage(new TextDecoder('utf8').decode(array))
};

// notify main thread worker is ready to be used
postMessage('ready');
