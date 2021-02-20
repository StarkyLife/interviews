console.log(this); // ?

function foo() {
    console.log(this);
}

foo(); // ?

const o = { foo: foo }

o.foo(); // ?

setTimeout(o.foo, 0); // ?