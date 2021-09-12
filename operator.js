/* basic */

// const { of } = rxjs
// const { count, max, min, reduce } = rxjs.operators
//
// const obs$ = of(4, 2, 6, 10, 8)
//
// obs$.pipe(count()).subscribe(x => console.log('count: ' + x))
//
// obs$.pipe(max()).subscribe(x => console.log('max: ' + x))
//
// obs$.pipe(min()).subscribe(x => console.log('min: ' + x))
//
// obs$.pipe(
//   reduce((acc, x) =>  acc + x, 0)
// ).subscribe(x => console.log('reduce: ' + x))

// const { from } = rxjs
// const { first, last, elementAt, filter, distinct, max, count } = rxjs.operators
//
// const obs$ = from([
//   9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
// ])

// obs$.pipe(first()).subscribe(x => console.log('first: ' + x))
//
// obs$.pipe(last()).subscribe(x => console.log('last: ' + x))
//
// obs$.pipe(elementAt(5)).subscribe(x => console.log('elementAt: ' + x))
//
// obs$.pipe(distinct()).subscribe(x => console.log('distinct: ' + x))
//
// obs$.pipe(
//   filter(x => x % 2 === 1)
// ).subscribe(x => console.log('filter: ' + x))

// obs$.pipe(filter(x => !(x % 2)), max()).subscribe(console.log)

// obs$.pipe(
//   distinct(),
//   filter(x => x % 2),
//   count()
// ).subscribe(console.log)

// const { from } = rxjs
// const { tap, filter, distinct } = rxjs.operators
//
// from([
//   9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2
// ]).pipe(
//   tap(x => console.log('-------------- 처음 탭: ' + x)),
//   filter(x => x % 2 === 0),
//   tap(x => console.log('--------- 필터 후: ' + x)),
//   distinct(),
//   tap(x => console.log('중복 제거 후: ' + x)),
// ).subscribe(x => console.log('발행물: ' + x))

/* Transformation */
//
// const { of } = rxjs
// const { map } = rxjs.operators
//
// of(1, 2, 3, 4, 5).pipe(
//   map(x => x * x)
// ).subscribe(console.log)

// const { from } = rxjs
// const { pluck, map } = rxjs.operators
//
// const obs$ = from([
//   { name: 'apple', price: 1200, info: { category: 'fruit' } },
//   { name: 'carrot', price: 800, info: { category: 'vegetable' } },
//   { name: 'pork', price: 5000, info: { category: 'meet' } },
//   { name: 'milk', price: 2400, info: { category: 'drink' } }
// ])
//
// obs$.pipe(
//   map(v => v.price)
// ).subscribe(console.log)
//
// obs$.pipe(
//   pluck('info', 'category')
// ).subscribe(console.log)
//
// const { ajax } = rxjs.ajax
// const { pluck } = rxjs.operators
//
// const obs$ = ajax(`http://api.github.com/search/users?q=user:mojombo`).pipe(
//   pluck('response', 'items', 0, 'html_url')
// )
// obs$.subscribe(console.log)

// const { range } = rxjs
// const { toArray, filter } = rxjs.operators
//
// range(1, 50).pipe(
//   filter(x => x % 3 === 0),
//   filter(x => x % 2 === 1),
//   toArray()
// ).subscribe(console.log)

// const { of } = rxjs
// const { reduce, scan } = rxjs.operators
//
// const obs$ = of(1, 2, 3, 4, 5)
//
// obs$.pipe(
//   reduce((acc, x) => { return acc + x }, 0)
// ).subscribe(x => console.log('reduce: ' + x))
//
// obs$.pipe(
//   scan((acc, x) => { return acc + x }, 0)
// ).subscribe(x => console.log('scan: ' + x))

// const { from, interval, fromEvent, zip } = rxjs
// const { pluck } = rxjs.operators
//
// const obs1$ = from([1, 2, 3, 4, 5, 6])
// const obs2$ = from(['a', 'b', 'c', 'd', 'e'])
// const obs3$ = from([true, false, 'F', [6, 7, 8], { name: 'zip' }])
//
// zip(obs1$, obs2$, obs3$).subscribe(console.log)
//
// const obs4$ = interval(1000)
// const obs5$ = fromEvent(document, 'click').pipe(pluck('x'))
//
// zip(obs4$, obs5$).subscribe(console.log)

// const { range, interval, fromEvent } = rxjs
// const { take, filter, pluck } = rxjs.operators

// range(1, 20).pipe(
//   take(5)
// ).subscribe(console.log)
//
// range(1, 20).pipe(
//   filter(x => x % 2 === 0),
//   take(5)
// ).subscribe(console.log)
//
// range(1, 20).pipe(
//   take(5),
//   filter(x => x % 2 === 0)
// ).subscribe(console.log)

// interval(1000).pipe(
//   take(5)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )
//
// fromEvent(document, 'click').pipe(
//   take(5),
//   pluck('x')
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )
//
// fromEvent(document, 'click').pipe(
//   pluck('x'),
//   filter(x => x < 200),
//   take(5),
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )
//
// const { range, interval, fromEvent } = rxjs
// const { takeLast, take, pluck } = rxjs.operators

// range(1, 20).pipe(
//   takeLast(5)
// ).subscribe(console.log)

// interval(100).pipe(
//   takeLast(5)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// interval(1000).pipe(
//   take(10),
//   takeLast(5)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// fromEvent(document, 'click').pipe(
//   take(10),
//   takeLast(5),
//   pluck('x')
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// const { range, interval, fromEvent } = rxjs
// const { takeWhile, takeLast, filter, pluck } = rxjs.operators

// range(1, 20).pipe(
//   takeWhile(x => x <= 10)
// ).subscribe(console.log)
//
// interval(1000).pipe(
//   takeWhile(x => x < 5)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )
//
// fromEvent(document, 'click').pipe(
//   pluck('x'),
//   takeWhile(x => x < 200),
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// const { interval, timer, fromEvent } = rxjs
// const { ajax } = rxjs.ajax
// const { takeUntil, pluck, tap } = rxjs.operators

// obs1$ = interval(1000)
// obs2$ = fromEvent(document, 'click')
//
// obs1$.pipe(
//   takeUntil(obs2$)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// obs1$ = fromEvent(document, 'click')
// obs2$ = timer(5000)
//
// obs1$.pipe(
//   pluck('x'),
//   takeUntil(obs2$)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// interval(50).pipe(
//   takeUntil(
//     ajax('http://127.0.0.1:3000/people/name/random').pipe(
//       pluck('response'),
//       tap(console.log)
//     )
//   )
// ).subscribe(console.log)
//
// const { range, interval, fromEvent } = rxjs
// const { skip, filter, pluck } = rxjs.operators

// range(1, 20).pipe(
//   skip(5)
// ).subscribe(console.log)

// interval(1000).pipe(
//   skip(5)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// fromEvent(document, 'click').pipe(
//   skip(5),
//   pluck('x')
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// const { range, interval, fromEvent } = rxjs
// const { skip, skipLast, pluck } = rxjs.operators

// range(1, 20).pipe(
//   skipLast(5)
// ).subscribe(console.log)

// fromEvent(document, 'click').pipe(
//   skipLast(5),
//   pluck('x')
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )
//
// const { interval, timer, fromEvent } = rxjs
// const { skipUntil, pluck } = rxjs.operators

// const obs1$ = interval(1000)
// const obs2$ = fromEvent(document, 'click')
//
// obs1$.pipe(
//   skipUntil(obs2$)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )
//
// const obs1$ = fromEvent(document, 'click')
// const obs2$ = timer(5000)
//
// obs1$.pipe(
//   pluck('x'),
//   skipUntil(obs2$)
// ).subscribe(
//   console.log,
//   err => console.error(err),
//   _ => console.log('COMPLETE')
// )

// const { interval, fromEvent } = rxjs
// const { delay, tap, take } = rxjs.operators

// interval(1000).pipe(
//   take(5),
//   tap(x => console.log(x + ' 발행시작')),
//   delay(1500)
// ).subscribe(x => console.log(x + ' 발행완료'))

// fromEvent(document, 'click').pipe(
//   tap(e => console.log(e.x + ' 발행시작')),
//   delay(1500)
// ).subscribe(e => console.log(e.x + ' 발행완료'))

// const { fromEvent } = rxjs
// const { timestamp, pluck, map } = rxjs.operators

// fromEvent(document, 'click').pipe(
//   pluck('x'),
//   timestamp()
// ).subscribe(console.log)

// fromEvent(document, 'click').pipe(
//   pluck('x'),
//   timestamp(),
//   map(x => {
//     x.timestamp = new Date(x.timestamp).toString()
//     return x
//   })
// ).subscribe(console.log)

// const { fromEvent, interval } = rxjs
// const { timeInterval, pluck } = rxjs.operators

// fromEvent(document, 'click').pipe(
//   pluck('x'),
//   timeInterval()
// ).subscribe(console.log)
// interval(1000).pipe(
//   timeInterval()
// ).subscribe(console.log)

// const { fromEvent } = rxjs
// const { ajax } = rxjs.ajax
// const { timeout, pluck } = rxjs.operators

// fromEvent(document, 'click').pipe(
//   timeout(3000)
// ).subscribe(
//   _ => console.log('OK'),
//   err => console.error(err))

// ajax('http://127.0.0.1:3000/people/name/random').pipe(
//   pluck('response'),
//   timeout(500)
// ).subscribe(console.log, console.error)

// const { fromEvent, interval, of } = rxjs
// const { ajax } = rxjs.ajax
// const { timeoutWith, pluck, scan } = rxjs.operators

// fromEvent(document, 'click').pipe(
//   timeoutWith(3000, interval(1000)),
//   scan((acc, x) => { return acc + 1 }, 0)
// ).subscribe(console.log)

// ajax('http://127.0.0.1:3000/people/name/random').pipe(
//   pluck('response'),
//   timeoutWith(500, of({
//     id: 0,
//     first_name: 'Hong',
//     last_name: 'Gildong',
//     role: 'substitute'
//   }))
// ).subscribe(console.log, console.error)

// const { fromEvent } = rxjs
// const { timeInterval, pluck, scan, tap, debounceTime, auditTime } = rxjs.operators
//
// const clicks$ = fromEvent(document, 'click').pipe(
//   timeInterval(),
//   pluck('interval'),
//   scan((acc, i) => acc + i, 0),
// )
//
// clicks$.subscribe(x => console.log('CLICKED: ' + x))
//
// clicks$.pipe(
//   debounceTime(1000)
// ).subscribe(x => console.log('OUTPUT: -------- ' + x))

// clicks$.pipe(
//   auditTime(1000)
// ).subscribe(x => console.log('OUTPUT: -------- ' + x))

const { sampleTime } = rxjs.operators

clicks$.pipe(
  sampleTime(1000),
  timeInterval()
).subscribe(x => console.log('OUTPUT: -------- ' + x.value + ' :' + x.interval))