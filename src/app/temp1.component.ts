import { from, Subject } from "rxjs";
 let observer

const subject = new Subject<number>();
subject.subscribe({next:x=>{console.log(x)}})
subject.next(1);
subject.next(2);

subject.next(Math.random()); // every subscriber get same value
observer.next(Math.random()) //every subscriber get different value

const source = from([1, 2, 3]);
const subject1 = new Subject();
source.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
});
source.subscribe(subject1)