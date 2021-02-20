function initCounter(n) {
    let a = n;

    return function(add) {
        return a += add;
    }
}

const counter = initCounter(5);

let result = counter(5);
result = counter(15);
result = counter(10);

console.log(result); // ?