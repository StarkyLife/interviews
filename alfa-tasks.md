## Задача на Promise chain:

```
Promise.resolve(1)
     .then(x => x + 1)
     .then(x => { throw x })
     .then(x => console.log(x))
     .catch(err => console.log(err))
     .then(x => Promise.resolve(1))
     .catch(err => console.log(err))
     .then(x => console.log(x));
```

## Задача на Promise.all:

// Есть две функции left(Быстрая), right(не очень)
// left может вернуть объект {statusCode: 404};
// В этом случае ответ от right уже не нужен
// Как сделать наиболее оптимально вызовы этих функций

```
async function left() {
     const response = await fetch('http://httpbin.org/status/' + Math.random() > 0.5 ? '200' : '404');
     return response.status;
}
async function right() {
     const response = await fetch('http://httpbin.org/delay/9');
     return response.status;
}
```

## Прототипы:

Про цепочки прототипов?
Создать class. User(поля методы) и от него унаследовать Developer(поля методы)  ES6/ES5(как больше нравится, не принципиально)

## Задача:
Одна на выбор:
    На скобки '()[]' → true, '({)]' → false
    На преобразование массива чисел с строку [2,3,0,1,4,7,8,10] → '0-4, 7-8, 10.';
