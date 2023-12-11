
// function sayHello() {
//     // console.log("Hello");
//     // alert("Hello World");
//     document.write("Bro")
    
// }
// function sayMY() {
//     console.log("My name is Samuel")
// }
// concatenation means to add two strings eg
// let j, k;
// j = "Samac";
// k = "bro";
// x = 2;
// y = 4;
// i = 6;
// console.log(j + " " + k, "is his name");
// console.log(x + y == i)
// console.log(x == y)
// console.log(x == j)
// console.log(j * x)
// console.log(j == x)
// A = P*(1+r/n)^(nt)
// you can only redeclare variables with var
// x = 100 + 7 * 5
// console.log(x)
// let man = {
//     firstname: "Felix",
//     lastname: "Mwangi",
//     age: 29,
// }



// let num = [5, 4, 84, 9, 8, 50, 79]
// console.log (num[4])

// function addTwoNumbers() {
//     console.log(5+6);
// }
// function addTwoNumbersandReturn() {
//     return(5+6);
//     const computedValue = addTwoNumbersandReturn();
//     console.log(10 + computedValue)
// }
// const car = {
//     brand: 'Toyota',
//     engine: 'v10',
//     capacity: 5,
//     speed: 0,
//     accelerate: function(speed) {
//         return 'The ' + this.brand + ' is accelerating at ' + speed + ' km/h';
//        }
// }
// console.log(car.speed);
// console.log(car.engine)
// console.log(car.brand)
// alert(car.accelerate(80))





//  const msg = "Yesterday's Match was very fun but it nearly got disrupted by the team's fans"
//  alert(msg)
//  let lenght = msg.length
//  console.log('Length of message :'+lenght)
//  msg.slice(12, 58)
//  console.log("New Message : "+msg.slice(12, 58));
//  msg.substring(50, 58)
//  console.log("Substring Message :"+msg.substring(50, 58));
//  msg.substr(13, 76)
//  console.log("Substr Message :"+msg.substr(13, 76));
//  msg.replace("disrupted", "disturbed")
//  console.log("Replaced Message :"+msg.replace("disrupted", "disturbed"));
//  msg.replace(msg.slice(49, 58), "disturbed")
//  console.log("Message after replace :"+msg.replace(msg.slice(49, 58), "disturbed"))
//  msg.concat(", I added this")
//  console.log("Concatenated Message :"+msg.concat(", I added this"))
//  msg.charAt(5)
//  alert(msg.charAt(5))
//  msg.charCodeAt(5)
//  alert(msg.charCodeAt(5))
//  let newArray = msg.split(" ")
//  alert(newArray)
//  msg.indexOf("fun")
//  alert(msg.indexOf("fun"))
//  msg.lastIndexOf("animal")
//  alert(msg.lastIndexOf("animal"))
//  msg.search("Match")
//  alert(msg.search("Match"))
//  msg.match("y")
//  console.log(msg.match("y"))
//  console.log(msg.match(/y/g))
//  console.log(msg.match(/y/gi))
//  msg.includes("fun")
//  alert(msg.includes("fun"))
//  msg.startsWith("t")
//  alert(msg.startsWith("t"))
//  msg.endsWith("was")
//  alert(msg.endsWith("was"))
//  console.log(msg == x.toString())
//  const t = x.toExponential(2)
//  console.log(t)
//  const j = x.toPrecision(2)
//  console.log(j)
//  let a = "10";
//  let b = "15.067";
//  let c = "24, 7";
//  let d = "kasapa";
// Number(a)
// console.log(a)
// parseFloat(a,2)
// console.log(a)

// let students = ["Felix","Samuel","Lord"]
// console.log(students[1])

// let cars = [];
// cars[0] = "Toyota";
// cars[1] = "Nissan";
// cars[2] = "Opel";
// cars[3] = "zenix"
// console.log(cars)
// console.log(cars.length)
// let Student=[
//     st001={
//         name: "felix",
//         age: 28,
//         grade: "A+"
//     },
//     st002={
//         name: "samuel",
//         age: 29,
//         grade: "B-"
//     },
//     st003={
//         name: "lord",
//         age: 27,
//         grade: "C"
//     }
// ]
// console.log(Student)
// console.log(Student.length-1)
// for (let i = 0; i < Student.length; i++) {
//     console.log (Student[i]);
//   }
// const cars = [];
// cars[0] = "Toyota";
// cars[1] = "Nissan";
// cars[2] = "Opel";
// cars[3] = "Zenix";

// console.log(`Cars: ${cars.length}`)
// console.log(`Cars: ${typeof cars}`)
// console.log(`Cars: ${Array.isArray(cars)}`)
// const saloon = new Array("Benz","Toyota","Honda","Nissan","Jaguar")
// console.log(`Saloon: ${saloon.length}`)
// const arraysDi = document.getElementById("list");
// saloon.push("kia rio");
// saloon.unshift("toyota vitz")
// saloon.splice(1,2,"Ford Mustang","Ford Explorer");
// saloon.splice(1);
// arraysDi.innerHTML = cars.reverse()

// arraysDi.innerHTML = saloon.toString();
// arraysDi.innerHTML = saloon;
// arraysDi.innerHTML = saloon.shift();
// arraysDi.innerHTML = saloon.pop();
// const ourcars = saloon.concat(cars)
// arraysDi.innerHTML += `<br>${ourcars}`

// const ages = [23, 34, 45, 56]
// const filteredNum = ages.filter((num) => {
//     return num > 30;
// })
// console.log(filteredNum)
// ages.map(function myFun(a){
//     console.log(a + 2);
// })
// ages.map((age) => console.log(`${age} + 2 = ${(age + 2)}`))
// reduce method
// const sumAge = ages.reduce((accumulator, currentValue) => accumulator + currentValue , 0 )
// console.log(sumAge)
// let total = 0;
// function addNumbers(n1, n2) {
//         return n1 + n2;
// }
// const result = ages.reduce(addNumbers, 0)
// console.log(result)
// const grades = [45, 65, 98, 90, 87, 57, 98]
// // every()
// let result = grades.every((grade)=>{
//     return grade > grades[2];
// });
// console.log(`EVERY ITEM GREATER THAN 98: ${result}`);
// // indexOf
// let index = grades.indexOf(98);
// console.log(`INDEX OF 98: ${index}`);
// // lastindexOf
// let lastIndex = grades.lastIndexOf(98);
// console.log(`LAST INDEX OF 98: ${lastIndex}`);
// // find()
// let foundGrade = grades.find((grade)=>{
//     return grade === 98;
// })
// console.log(`FOUND GRADE 98: ${foundGrade}`);
// // Array.from
// let newArrayFromString = Array.from('hello world');
// console.log(newArrayFromString);
// // Array.keys
// let arrayKeys = Object.keys(students);     
// console.log(`ARRAY KEYS: ${arrayKeys}`);
// // includes
// let includeResult = students.includes("Samuel");
// console.log(`INCLUDE JOHN? ${includeResult}`);
// // spread operator
// let newStudents = ["John", ...students, "Jane"];
// console.log(newStudents);
// // random
// let randomNumber = Math.random();
// console.log(`RANDOM NUMBER: ${randomNumber}`);
// console.log(grades.every(grade => grade >= 50));
// // some()
// console.log(grades.some(grade => grade < 50));
// // find()
// let index = grades.findIndex(grade => grade === 98);
// if (index !== -1) {
//     console.log(`Element found at position : ${index}`);
// } else {
//     console.log('Element not found');
//     }

// const results = grades.reduce(computeReduce);
// function computeReduce(total, value){
//     return total + value;
// };

// for(let i = 0;i<grades.length; i++){
//     mysum += grades[i];
// }
// console.log(`Sum of grades: ${mysum}`);

//     console.log("Total" + total);
//     console.log('VALUEs: $(value)');
//     console.log("index" + index);
// }


// the dot is the attribute accessor
// events are things that happen to html
// type casting refers to converting one datatype into another 


// develop the form purely using javascript
// write a javascript program to compare two objects too determine  if the first contains equivalent property values to the second one.
// let today = new Date();
// let birthDate = new Date(2004, 7, 28);
// console.log(today === birthDate)

const car = {
        brand: 'Toyota',
        engine: 'v10',
        capacity: 5,
        speed: 0
           }
const trip = {
        brand: 'Nissan',
        engine: 'v20',
        capacity: 6,
        speed: 100
}
function compareOjects(car,trip) {
    for (const key in car){
        if (car.brand !== trip.brand){
            return false;
        }
    }
    return true;
}
if (compareOjects(car,trip)) {
    console.log('they are the same');
} else {
    console.log('they are different');
}
// write a javascript program to filter out the
//  specified values from a specified array.
// Return the origional array without filtered values



const origionalValues = [23, 34, 45, 56, 78, 98, 21, 19]
const filteredValues = origionalValues.filter((num) => {
    return num > 30;
})
console.log( 'The filtered results are:'+ filteredValues)
// Write a javascript program to get the given sum of a given array ,
// after mapping each element to a value using the provided function.
// Define the input array
const inputArray = [1, 2, 3, 4, 5];

// Define the mapping function (example: square the value)
function mapFunction(value) {
  return value * value;
}

// Map each element in the array using the provided function
const mappedArray = inputArray.map(mapFunction);

// Calculate the sum of the mapped values
const sum = mappedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Output the result
console.log("Original Array:", inputArray);
console.log("Mapped Array:", mappedArray);
console.log("Sum of Mapped Values:", sum);

// a javascript program which looks througb a list of numbers and separate the numbers that are even into a single array and the odd numbers into another separate array, the size of the list should twenty-five. 
// Function to separate even and odd numbers
function separateEvenOddNumbers(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        } else {
            oddNumbers.push(numbers[i]);
        }
    }

    return { evenNumbers, oddNumbers };
}

// Generate a list of 25 numbers (you can replace this with your own list)
let numbersList = [];
for (let i = 1; i <= 25; i++) {
    numbersList.push(i);
}

// Separate even and odd numbers
let result = separateEvenOddNumbers(numbersList);

// Print the results
console.log("Even Numbers:", result.evenNumbers);
console.log("Odd Numbers:", result.oddNumbers);

