interface User {
  name: String;
  id: number;
}

const user: User = { name: "Hayes", id: 0 };
console.log(user);

interface IterationResult {
  value: any;
  done: boolean;
}

interface Iterator2 {
  next(value?: any): IterationResult;
}

interface Iterable2 {
  [Symbol.iterator](): Iterator2;
}
