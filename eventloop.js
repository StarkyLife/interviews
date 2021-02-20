setTimeout(() => console.log('1'));

console.log('2');



//////

setTimeout(() => console.log('1'));

Promise.resolve().then(() => console.log('2'))

Promise.resolve().then(() => setTimeout(() => console.log('3'), 0))

console.log('6');


////


setTimeout(() => console.log('1'));

Promise.resolve().then(() => console.log('2'))

Promise.resolve().then(() => setTimeout(() => console.log('3'), 0))

new Promise((resolve) => {
    console.log('4');

    resolve('5')
}).then(console.log)

console.log('6');