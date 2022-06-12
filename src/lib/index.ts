
export async function stringReverse(input: string): Promise<string> {
  return input.split('').reverse().join('');
}
