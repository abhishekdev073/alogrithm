function* genFunc() {
      yield 3;
      yield 4;
      return 5;
      yield 100;
}
var a = genFunc()
console.log(a.next())// { value: 3, done: false }
console.log(a.next()) // { value: 3, done: false }
console.log(a.next()) // { value: 100, done: true }
console.log(a.next()) // { value: undefined, done: true }