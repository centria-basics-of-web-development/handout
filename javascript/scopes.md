## JavaScript variable scopes
JavaScript provides three options, var, let, and const.
### var
The scope of a var variable is either the function in which it is declared (function scope) or the global scope if it's declared outside any function.
```javascript
a = 1;

function example() {
    const z = 30;
    console.log(`a=${a}`);
    if (true) {
        var x = 10;
        console.log(`x=${x}`);
        let y = 20;
        console.log(`y=${y}`);
        z = 40;
    }
    console.log(`y=${y}`);
}

example();
```