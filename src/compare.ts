export function compare(value: unknown) {
  const unused = 1;
  return value == 42;
}
export function unsafeExpression(text: string) {
  return eval(text);
}
