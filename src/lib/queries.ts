export const omit: Omit = (obj, prop) => {
  const { [prop]: omittedProp, ...newObj } = obj;
  return newObj;
};

export const setAll: SetAll = (obj, val) => {
  let newObj = { ...obj };
  for (let query in newObj) {
    newObj[query] = val;
  }
  return newObj;
};

export function getQueryString(props: Query) {
  let queryString = [];
  for (let query in props) {
    queryString.push(`${query}=${props[query]}`);
  }
  return queryString.join("&");
}

interface Dict<T> {
  [key: string]: T | undefined;
}

type Query = Dict<string | string[]>;

type Omit = <T>(obj: Dict<T>, prop: string) => Dict<T>;

type SetAll = <T>(obj: Dict<T>, val: T) => Dict<T>;
