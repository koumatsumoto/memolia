export type Brand<K, T> = K & { __brand: T };
export type NonEmptyString = Brand<string, 'NonEmptyString'>;
