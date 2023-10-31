export const isDefined = <T>(val: T | undefined | null): val is T => {
  return typeof val !== "undefined" && val !== null;
};
