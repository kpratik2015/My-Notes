export const prependValue = <
  Suffix extends string,
  Prefix extends string,
  T extends Record<string, Suffix>
>(
  obj: T,
  value: Prefix
) => {
  const proxy = new Proxy(obj, {
    get: (target, prop: string) => `${value}${target[prop]}`,
  });

  return { ...proxy } as unknown as { [K in keyof T]: `${Prefix}${T[K]}` };
};
