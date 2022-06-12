onmessage = (e: MessageEvent<string>) => {
  const input = e.data;
  postMessage(input.split("").reverse().join(""));
};
