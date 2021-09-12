// const { of, from, range, generate } = rxjs;
//
// const obs1$ = of(1, 2, 3, 4, 5)
// const obs2$ = from([6, 7, 8, 9, 10])
// const obs3$ = range(11, 5)
// const obs4$ = generate(
//   15, x => x < 30, x => x + 2
// )
//
// obs1$.subscribe(item => console.log(`of: ${item}`))
// obs2$.subscribe(item => console.log(`from: ${item}`))
// obs3$.subscribe(item => console.log(`range: ${item}`))
// obs4$.subscribe(item => console.log(`generate: ${item}`))
//
// const { interval, timer } = rxjs
//
// const obs1$ = interval(1000)
// const obs2$ = timer(3000)
//
// obs1$.subscribe(item => console.log(`interval: ${item}`))
// obs2$.subscribe(item => console.log(`timer: ${item}`))
//
// const { fromEvent } = rxjs
//
// const obs1$ = fromEvent(document, 'click')
// const obs2$ = fromEvent(document.getElementById('myInput'), 'keydown')
//
// obs1$.subscribe(item => console.log(item))
// obs2$.subscribe(item => console.log(item))
//
// const { ajax } = rxjs.ajax
//
// const obs$ = ajax(`http://127.0.0.1:3000/people/1`)
// obs$.subscribe(result => console.log(result.response))
//
// const { Observable } = rxjs
//
// const obs$ = new Observable(subscriber => {
//   subscriber.next(1)
//   subscriber.next(2)
//   subscriber.next(3)
//
//   // 값을 다 발행한 뒤에는 compelte를 실행하여 메모리 해제
//   subscriber.complete()
// })
//
// obs$.subscribe(item => console.log(item))
//
// const { of, interval, fromEvent } = rxjs
//
// const obs1$ = of('a', 'b', 'c')
// const obs2$ = interval(1000)
// const obs3$ = fromEvent(document, 'click')
//
// setTimeout(_ => {
//   console.log('of 구독 시작')
//   obs1$.subscribe(item => console.log(item))
// }, 5000)
// setTimeout(_ => {
//   console.log('interval 구독 시작')
//   obs2$.subscribe(item => console.log(item))
// }, 10000)
// setTimeout(_ => {
//   console.log('fromEvent 구독 시작')
//   obs3$.subscribe(_ => console.log('click!'))
// }, 15000)
// setTimeout(_ => {
//   console.log('interval 구독 시작 2')
//   obs2$.subscribe(item => console.log(item))
// }, 20000)
//
// const { from } = rxjs
// const observable$ = from([1, 2, 3, 4, 5])
//
// const observer = {
//   next: console.log,
//   error: err => console.error('발행중 오류', err),
//   complete: () => console.log('발행물 완결'),
// }
//
// observable$.subscribe(observer)

// const { range } = rxjs
//
// const { filter } = rxjs.operators
// const observable$ = range(1, 10)
//
// const observer = {
//   next: x => console.log(x + ' 발행'),
//   error: err => console.error('발행중 오류', err),
//   complete: () => console.log('발행물 완결'),
// }
// //
// // observable$.pipe(
// //   filter(x => x % 2 === 0)
// // ).subscribe(observer)
//
// const { interval } = rxjs
//
// const { tap, filter, map } = rxjs.operators
// const observable$ = interval(1000)
//
// // ... observer 정의
//
// observable$.pipe(
//   tap(console.log),
//   filter(x => x % 2 === 0),
//   map(x => x * x)
// ).subscribe(observer)
//
// const { fromEvent } = rxjs
//
// const { map } = rxjs.operators
// const observable$ = fromEvent(document, 'click')
//
// // ... observer 정의
//
// observable$.pipe(
//   map(e => e.x + ' ' + e.y),
// ).subscribe(observer)

// const { Subject } = rxjs
// const subject = new Subject()
//
// subject.subscribe(console.log)
//
// subject.next(1)
// subject.next(3)
// subject.next(5)

// const { Subject } = rxjs
// const subject = new Subject()
//
// setTimeout(_ => {
//   let x = 0
//   setInterval (_ => {
//     subject.next(x++)
//   }, 2000)
// }, 5000)
//
// subject.subscribe(x => console.log('바로구독: ' + x))
// setTimeout(_ => {
//   subject.subscribe(x => console.log('3초 후 구독: ' + x))
// }, 3000)
// setTimeout(_ => {
//   subject.subscribe(x => console.log('10초 후 구독: ' + x))
// }, 10000)
// setTimeout(_ => {
//   subject.subscribe(x => console.log('14초 후 구독: ' + x))
// }, 14000)

// const { interval } = rxjs
//
// const obs$ = interval(1000)
//
// obs$.subscribe(x => console.log('바로구독: ' + x))
// setTimeout(_ => {
//   obs$.subscribe(x => console.log('3초 후 구독: ' + x))
// }, 3000)
// setTimeout(_ => {
//   obs$.subscribe(x => console.log('5초 후 구독: ' + x))
// }, 5000)
// setTimeout(_ => {
//   obs$.subscribe(x => console.log('10초 후 구독: ' + x))
// }, 10000)

// const { interval, Subject } = rxjs
//
// const subject = new Subject()
// const obs$ = interval(1000)
//
// obs$.subscribe(subject)
//
// subject.subscribe(x => console.log('바로구독: ' + x))
// setTimeout(_ => {
//   subject.subscribe(x => console.log('3초 후 구독: ' + x))
// }, 3000)
// setTimeout(_ => {
//   subject.subscribe(x => console.log('5초 후 구독: ' + x))
// }, 5000)
// setTimeout(_ => {
//   subject.subscribe(x => console.log('10초 후 구독: ' + x))
// }, 10000)

// const { BehaviorSubject } = rxjs
// const subject = new BehaviorSubject(0) // 초기값이 있음
//
// subject.subscribe((x) => console.log('A: ' + x))
//
// subject.next(1)
// subject.next(2)
// subject.next(3)
//
// subject.subscribe((x) => console.log('B: ' + x))
//
// subject.next(4)
// subject.next(5)

// const { ReplaySubject } = rxjs
// const subject = new ReplaySubject(3) // 마지막 3개 값 저장
//
// subject.subscribe((x) => console.log('A: ' + x))
//
// subject.next(1)
// subject.next(2)
// subject.next(3)
// subject.next(4)
// subject.next(5)
//
// subject.subscribe((x) => console.log('B: ' + x))
//
// subject.next(6)
// subject.next(7)


const { AsyncSubject } = rxjs
const subject = new AsyncSubject()

subject.subscribe((x) => console.log('A: ' + x))

subject.next(1)
subject.next(2)
subject.next(3)

subject.subscribe((x) => console.log('B: ' + x))

subject.next(4)
subject.next(5)

subject.subscribe((x) => console.log('C: ' + x))

subject.next(6)
subject.next(7)
subject.complete()