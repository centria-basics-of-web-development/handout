## Prototype-based inheritance
In JavaScript, inheritance is prototype-based and not class-based, like in Java or C++.

Instead of classes, Javascript has objects... everywhere. And these objects can have properties, and these properties can be of any type, even functions.

JavaScript objects have a property \_\_proto__, which is a link to another object, the prototype. The object will inherit all the properties - including functions - of this linked prototype object.

Prototypes can have prototypes too, this will lead to a (prototype chain)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain]. The prototypes at the end of the prototype chain are the _Object_ and then finally _null_, in most cases.

There are several ways for setting the prototype for an object. _Object.create()_ is a reasonable choice.

For a thorough look at inheritance using prototypes, read Mozilla Developer Network's (Details of the object model)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain].

Let's take a look at an example of prototypal inheritance:

```javascript
// Let's create an object
const protoObject =
{
    myProperty: "nice",
    myMethod: function (input) { console.log(`I received ${input}`); }
}

console.log(protoObject.myProperty) // Prints out "nice"
protoObject.myMethod('a cake'); // Prints out "I received a cake"

// Let's create another object using the first one as its prototype
const newObject = Object.create(protoObject);

console.log(newObject.myProperty) // Prints out "nice" still

// Changes in the prototype object are reflected 
// in the objects which inherit from it
protoObject.myProperty = "new and improved!"
protoObject.myMethod = function () { console.log(`My property is ${this.myProperty}`) }

newObject.myMethod() // Prints out "My property is new and improved!"

Object.getPrototypeOf(newObject); 
//prints "{ myProperty: 'new and improved!', myMethod: [Function] }"
```
How do you know if some property belongs to this object or its prototype? You can use the _hasOwnProperty()_ method to check for that. To avoid enumerating inherited properties with _for..in_, you can add an explicit check inside the loop body:

```javascript
for(let p in o) {
    if(!o.hasOwnProperty(p)) continue;

    // Otherwise list property
}

// Aslo
for(let p in o) {
    if(typeof o[p] === "function") continue;

    // Do not list object methods
}
```