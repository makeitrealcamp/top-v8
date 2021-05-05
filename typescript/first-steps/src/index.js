"use strict";
// let anything: any;
// Primitivos
var num;
num = 1;
// num = 'string'
var str = 'hola mundo';
// str = true
var bool = true;
// bool = 3
var something = 'string';
// something = 2
var double = '4';
double = 3;
var p = 'Maria';
p = 5;
// p = true
// Arrays
// let arr: string[] = ['hola', 'mundo']
// let arr: string[] | number[] = ['hola', 2]
var arr = ['hola', 2];
// Tuples
var tup = ['hola', 2];
// class Person implements IPerson {
//   constructor(name: string, age: number, working: boolean) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }
// }
// class Person {
//   constructor(name: string, age: number, working: boolean) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }
// }
// const p1 = new Person('Maria', 24, true)
// Duck Typing
var person = { name: 'Maria', age: 24 };
var teacher = {
    name: 'Simon',
    age: 30,
    working: true,
    course: 'TOP',
    teach: function () {
        console.log('hola mundo');
    }
};
// functions
function sum(a, b) {
    return a + b;
}
num = sum(1, 2);
// Promises
// Promise<string>
