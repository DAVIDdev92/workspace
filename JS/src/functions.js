//Arrow functions

let myFunc = (text) => {
    return text.toLowerCase().replaceAll(" ", "")
};

console.log(myFunc("HELLO WORLD"));


//No-name functions 

function test(text, fn) {
    console.log(fn(text));
}

test("Hello", function(text) { return text.toLowerCase()});