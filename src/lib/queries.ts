export const excludeProp: ExcludeProp = (obj, prop) => {
  const { [prop]: omittedProp, ...newObj } = obj;
  return newObj;
};

export const setValue: SetValue = (obj, val, values) => {
  let newObj = { ...obj };
  for (let query in newObj) {
    if (values?.includes(query)) {
      newObj[query] = val;
    }
  }
  return newObj;
};

export function getQueryString(props: Query) {
  let queryString = [];
  for (let query in props) {
    if (props[query]) {
      queryString.push(`${query}=${props[query]}`);
    }
  }

  return queryString.join("&");
}

interface Dict<T> {
  [key: string]: T | undefined;
}

type Query = Dict<string | string[]>;

type ExcludeProp = <T>(obj: Dict<T>, prop: string) => Dict<T>;

type SetValue = <T>(
  obj: Dict<T>,
  val: T,
  values?: string | string[]
) => Dict<T>;
