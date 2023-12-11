
// //sort even from odd
// function separateEvenOddNumbers(numbers) {
//     let evenNumbers = [];
//     let oddNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         } else {
//             oddNumbers.push(numbers[i]);
//         }
//     }

//     return { evenNumbers, oddNumbers };
// }
// let oddandEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// let result = separateEvenOddNumbers(oddandEven);
// console.log("Even Numbers:", result.evenNumbers);
// console.log("Odd Numbers:", result.oddNumbers);

// using mapping method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// let odd = [];
// let even = [];

// odd = numbers.filter((number) => {
//     return number % 2 !== 0
// })

// even = numbers.filter(function(number){
//     return number % 2 === 0;
// })

// console.log(`Checking Odds:: ${odd}`)
// console.log(`Checking Evens:: ${even}`)

// without modulo
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// 
// let odd = [];
// let even = [];
// 
// odd = numbers.filter((number) => (number & 1) !== 0);
// even = numbers.filter((number) => (number & 1) === 0);
// 
// console.log(`Checking Odds::`, odd);
// console.log(`Checking Evens::`, even);
// 
// with modulo
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// 
// const isOdd = (number) => (number & 1) !== 0;
// 
// const mapToOddEven = (number) => ({
    // value: number,
    // type: isOdd(number) ? 'Odd' : 'Even',
// });
// 
// const mappedNumbers = numbers.map(mapToOddEven);
// 
// const odd = mappedNumbers.reduce((acc, { value, type }) => {
    // if (type === 'Odd') {
        // acc.push(value);
    // }
    // return acc;
// }, []);
// 
// const even = mappedNumbers.reduce((acc, { value, type }) => {
    // if (type === 'Even') {
        // acc.push(value);
    // }
    // return acc;
// }, []);
// 
// console.log(`Checking Odds::`, odd);
// console.log(`Checking Evens::`, even);
// const siblings = ['Felix', 'Samuel', 'Kofi', 'Nana'];
// console.log('My Siblings are:', siblings);
// const ourDay = new Date();
// const ourDay = new Date('2022-10-15');
// const ourDay = new Date(2022, 10, 2, 14, 13, 34);
// const ourDay = new Date(2022, 10, 2, 14, 13);
// const ourDay = new Date(2022, 10, 2, 14);
// const ourDay = new Date(2022, 10, 2);
// const ourDay = new Date(2022, 10);
// const ourDay = new Date(2022, 10);
// const ourDay = new Date(2022);
// const ourDay = new Date();

// console.log(ourDay);
// getYear();>-yyyy
// getMonth();>0-11
// getDate();
// getDay();>1-31
// getHours();
// getMinutes();
// getSeconds();>0-59
// getMilliseconds();>0-999
// const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const months = ['Jan', 'Feb', 'Mar', 'APr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// // console.log(day[3]);
// const newDate = new Date();

// console.log('Day of the week:', day[newDate.getDay()]);
// console.log('Year:', newDate.getYear());
// console.log('FullYear:', newDate.getFullYear());
// console.log('Month:', newDate.getMonth());
// console.log('Date:', newDate.getDate());

// console.log("Euler's constant:", Math.E)
// console.log("PI's Constant:", Math.PI)

// Math.round()
// Math.floor()
// Math.ceil()
// Math.trunc()
// Math.pow()
// Math.sqrt()
// console.log(Math.pow(22, 9));
// console.log(Math.sqrt(33));
// console.log(Math.abs(5));
//log
// console.log(Math.log2(5))
// const x = 5;
// const y = 10;

// if (x > y) {
//     console.log(`${x} is greater than ${y}`);
// } else if (x === y) {
//     console.log(`${x} is equal to ${y}`);
// } else if (x + 6 === y) {
//     console.log(`${x} is not equal to ${y}`);
// } else if (x - 1 === y) {
//     console.log(`${x} is not equal to ${y}`);
// } else {
//     console.log(`${x} is less than ${y}`);
// // }
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case  6:
//       day = "Saturday";
//   }
//   console.log(`Today is : ${day}`)
// loops
// for loop
// write a javascript program to write the following sentence 'I am going to school at 1'and repeat it 10 times but increase th number at the end of the sentence each time
// for(let i = 1; i <=10; i++) {
//   console.log(`I am going to school at ${i}.`);
// }



// const fruits = {
//     orange : 30,
//     apple : 20,
//     banana : 10,
//     guara : 70,
//     pawpaw : 88,
// }
// for (let fruit in fruits) {
//     console.log(`The amount of ${fruit} is ${fruits[fruit]}`);
// }
// const schools = ["CUA", "KNUST", "UMAT", "UA", "CU", "WU", "ASHESI"];
// for (let school in schools) {
//     console.log(`The names of the Schools I have listed above: ${school}`);
//     }
// for (const school in schools) {
//     console.log(`The names of the ${schools[school]} I have listed above: ${school}`);
//     }
// for (let school of schools) {
//     console.log(`The names of the Schools I have listed above: ${schools}`)
// }
// while
// let i = 0;
// while (i < 5){
//     console.log(`Item ${schools[i]} at index ${i}`);
//     i++;
//     }
    //do while
    // let j = 0;
    // do{
    //     console.log(`Item ${schools[j]} at index ${j}`);
    //     j++;
    //     }while(j >= schools.length);

    // break
    // let k = 0;
    // while (k<5){
    //         if (k == 4){
    //                 break;
    //             }
    //         console.log(`Item ${schools[k]} at index ${k}`);
    //         k++
    //         }
            // continue
            // let l = 0;
            // for (let i = 0; i < schools.length; l++) {
            //         if (l==2){
            //             continue;
            //         }
            //         console.log(`Item ${schools[l]} at index ${l}`);
            
            //         }
            // const mySet = new Set(["a", "b", "c", "d"])
            // mySet.forEach((set)=> {
            //     console.log(`Your set is ${set}`);
            // });
            // console.log(`This is my set ${mySet}`)

            // const map = new Map([
            //     ["Fruits", 600],
            //     ["Vegetables", 300],
            //     ["goats", 300],
            //     ["sheep", 100]
            //     ]);
            //     console.log(`Item in Map is ${map.size}`)
                // console.log(`Item in Map is ${map.get("Fruits")}`)

                // try {
                //     const a = 50;
                //     const b = "0";
                //     const c = a/b;
                //     console.log(`${c.toString()}`)
                    
                // } catch (error) {
                //     console.log(`Error ${error.getMessage()}`)
                // }

                // const people = {
                //     firstname: 'John',
                //     lastname: 'Doe',
                //     phonenumber: '0230990092',
                // }
                // fulname:()=> {
                //     return this.firstname + " " + this.lastname;
                // }
                // console.log
// javascript classes
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = "";
//         this.lastName = "";
//         this.age = 19
//         this.fullname = () =>{
//             return `${this.firstName} ${this.lastName}`;
//         }
//     }
// }
// const person1 = new Person('Samuel','Maclar');
// console.log(`My full name is ${person1.fullname()}`);