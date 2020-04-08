// interface initA {
//   inita: number
// }

// const initA: initA = { inita: 123 }

// type Color = { red: string } | { yellow: string }
// const a: Color = { red22: 'bbbb' }

interface Itest {
  name: string;
  age: number;
  address: string;
}

type ant = keyof Itest;

// const str: any = "aaa" | "bbbb" | "cccc";

const data = {
  a: 3,
  hello: "world",
};

function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  console.log(o[name]);
  return o[name];
}

get(data, "a");
