let addFunc = function add(a, b) {
    return a + b;
}

console.log(addFunc);

console.log(addFunc.apply(null, [1, 2]));
console.log(addFunc.call(this, 1, 2));
console.log(addFunc.toString());

// Anonymous functions
let anonymousFunc = function(){
    console.log('Anonymous function');
};
//As arguments of other functions
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);
// Arrow function
let arrowFunc = () => console.log('Anonymous function');
