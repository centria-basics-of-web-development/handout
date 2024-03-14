## Types

### Primitive and structural types in JavaScript
JavaScript data type includes primitive types and structural types.

- Primitive type includes

| Primitive type | Acceptable values                  |
|----------------|------------------------------------|
| String         | e.g., 'Hello', 'Hi'               |
| Number         | e.g., 7, 3.14, 7.5e1              |
| BigInt         | e.g., 53n, in ES2020              |
| Boolean        | true and false                     |
| Undefined      | e.g., no value has been set       |
| Symbol         | see Symbol, in ES2015             |

- Structural type includes Object and Function.

The root difference between primitive and structural type is the memory utlization.

The primitive types are stored as a singel atomic value assigned to a vairable in the memory.

```javascript
let key1 = 'foo';
let key2 = key1;
```
The code snippet above created a variable key1 and assigned value 'foo' to it; the key2 is created and assigned value with key1 variable. 

The primitive types memory utilization example, 

key1 => address[1234] of value 'foo'  
key2 => address[5678] of value 'foo'

To proof this theory, run the following script. 
```javascript
let key1 = 'foo';
let key2 = key1;

console.log(key1);
console.log(key2);

/*
 * foo
 * foo
 */

let key1 = 'boo';

console.log(key1);
console.log(key2);

/*
 * boo 
 * foo
 */
```

The structural types memory utilization example,

obj1 => address[1234] of value {p1:'foo',p2:'boo'}  
obj2 => address[1234] of value {p1:'foo',p2:'boo'}

Let's replicate the above example with the structural type, object

```javascript
let obj1 = {
    p1: 'foo',
    p2: 'boo',
}

let obj2 = obj1;


console.log(obj1);
console.log(obj2);
/*
* {
*   p1: 'foo',
*   p2: 'boo'
* }
*
* {
*   p1: 'foo',
*   p2: 'boo'
* }
*/
```
We see two objects printed on the console with the same properties. When I change one of the properties of the obj2 object and print them to the console again.
```javascript
let obj1 = {
    p1: 'foo',
    p2: 'boo',
}

let obj2 = obj1;

obj1.p1 = 'fooboo';

console.log(obj1);
console.log(obj2);

/*
* {
*   p1: 'foo',
*   p2: 'boo'
* }
*
* {
*   p1: 'foo',
*   p2: 'boo'
* }
*/
```


### Mutability and Immutability in JavaScript

Since we described the primitive and structural types in JavaScript. In a nutshell, the primitive types allocate the seperated memory for each value; the structural types allocate the shared memory for the value (Object and Function).

Therefore, primitive types are immutable and structural types are mutable.

## Object
The JavaScript Object includes build-in object, user defined object and wrapper objects.
### Build-in object
JavaScript provides a set of standard built-in objects, which include objects for all the data types except undefined and null. Many of these objects provide utility methods useful for data manipulation. For example, Math, Date, and RegExp:
```javascript
// random number between 0 and 1 [0,1)
let seed = Math.random();

let lottoNr = Math.floor(1 + 40 * seed);

// year, month, day, hour, and minute
const start_date = new Date(2019, 4, 4, 14, 15);

let today = new Date();

// month = e.g., 9
const month = today.getMonth();

// returns the first match
const pattern = /[0-9]/;
let found = str.match(patt);
```

### User defined object
An Object is a data type that is a collection of properties (key/Symbol-value pairs) and is mutable. An Object is the prototype to several other types, including Array (also Map, Set, WeakMap, and WeakSet from ES6).

### Wrapper Object
The primitive type value is a non-composite building block. It is a pure value without properties.

But why does the following code work?
```javascript
let str = 'foo';
console.log(str.toUpperCase());

// Output: FOO
```
It looks the str is an object since it has the property as a toUpperCase function.

Rationale: whenever you try to access a property of a string str, JavaScript coerces the string value to an object, by new String(str). This object is called a wrapper object. It inherits all string methods, and is used to resolve the property reference. Once the property has been resolved, the wrapper object is discarded.

The code snippet below is a translation of the script example above.
```javascript
let str = 'foo';
let temp = new String(str);
console.log(temp.toUpperCase()),
delete temp;
console.log(temp);
```

Coercion as necessary
JavaScript coerces wrapper objects into the wrapped primitive values as necessary. The == equality will treat a value and its wrapper object as equal, while the === strict equality operator will treat them as different entities.

```javascript
var a = 'hello';             // primitive
var b = new String('hello'); // wrapper object
typeof a;  // "string"
typeof b;  // "object"
a == b  // true
a === b // false
```

Numbers
Same principle applies to numbers.

```javascript
var x = 1;
var y = new Number(1);
typeof x;  // "number"
typeof y;  // "object"
x == y  // true
x === y // false
```

When it comes to numbers, however, JavaScript gives you more liberty. For starters, you can create your own “number”-like objects, and let type coercion resolve any numerical operation for you. For example:

```javascript
var x = {
  num: 2,
  valueOf: function() {
    return this.num * 2;
  }
}
var y = {
  num: 3,
  valueOf: function() {
    return this.num * 2;
  }
}
console.log(x + y); // 10
```

As you can see from the above code, I did not explicitly convert x and y to numbers, yet I was able to add them. This is because the addition coerced them into their primitive values. Basically, behind the scenes, JavaScript did the following:

```javascript
var temp = Number(x) + Number(y);
console.log(temp); // 10
```

Remember that calling the Number constructor without the new operation basically attempts to convert a value into its primitive representation. The same goes for String and Boolean (though Boolean is a little problematic — we’ll deal with it in a later post perhaps).

Having said that, JavaScript knows what the primitive value of my number-like object is because it looks for and executes the valueOf method. As long as you have this method in your object (and assuming it returns a number), your object can be mathematically operated on (though, you should be warned, the Number object of course has more methods than just valueOf, such as toExponential, toFixed, toLocaleString, toPrecision, and toString).