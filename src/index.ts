import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

// let total: number = 100;
// let name: string = 'ivan';
// let isActive: boolean = true;
// let empty: null = null;
// let undf: undefined = undefined;

// let age: number = 10;


// name = '5';

// const numbers: number[] = [1, 2, 3, 4];

// numbers.push("d")


// const user: {name : string , age : number} = {
//     name: "ivan",
//     age:12,
// }

// type User =  {
//     name: string,
//     age :number,
    
// }
// const user: User  = {
//     name: 'ivan',
//     age:12,
// }

// user.age = "D";
// user.name = 3;

// type eventType = 'lesson' | 'homework' ;
// const event: eventType = 'homework';