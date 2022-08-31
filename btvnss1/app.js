//Ex3 (không có log)
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// } 

// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };

//Ex4
// console.log(`1. ${age}`); //Trả về là undefined do var nó sẽ hiểu là biến global nhưng chưa đến câu lệnh gán giá trị
// //nên sau khi thực hiện câu lệnh in ra nó ms bắt đầu gán giá trị 2
// var age = 20;
// console.log(`2. ${age}`);//20 var age được gọi ở trên log 1

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`)// 27
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27

// //lỗi từ log 5 comment log 5
// //console.log(`5. ${getFullName(firstName, lastName)}`); 
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;s
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); // Peter Parker

//Ex5
// console.log(age); // Lỗi vì let age được khai báo ở dưới

// let age = 27;

// console.log(age)// 27

// {
// console.log(firstName); // Lỗi vì let firsrName được khởi tạo ở dưới

// console.log(age);
// console.log(age);

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName);// Peter 
// console.log(lastName);//Parker
// console.log(job);//Spider man
// // vì được khởi tạo ở trên log
// }



//Ex6
// a = 2;
// var a;
// console.log(a);
//2
//Giải thích khi khai báo a mà không định nghĩa kiểu dữ liệu, máy sẽ mặc định biến này là global variable
//máy sẽ nhảy qua câu lệnh var a để thực hiện in ra a

//Ex7
// console.log(a);
// var a = 2;
//Trả về là undefined do var nó sẽ hiểu là biến global nhưng chưa đến câu lệnh gán giá trị
// nên sau khi thực hiện câu lệnh in ra nó ms bắt đầu gán giá trị 2

//Ex8
// var a = 10;
// function foo() {
//   var a;
//   console.log(a);//undefined
//   a = 2;
// }
// foo();
//Trả về giá trị undefined vì khi vào function nó cũng có một biến var a mới
//Điều này khiến cho a chưa có giá trị và đc gán undefined sau khi in thì mới được gán a =2

//Ex9
// foo();
// var foo();
// function foo(){
//     console.log(1);
// }

// foo = function() {
//     console.log(2);
// } 
//lỗi

//Ex10
// var foo();
// function foo(){
//     console.log(1);
// }
// foo = function() {
//     console.log(2);
// }
// foo();
//lỗi

//Ex11
// function removeEnd(arr,n) {
//     arr.splice(arr.length-1,n);
// }

//Ex12
// function first (arr, n) {
//     for (let i = 0;i<=n;i=i+1){
//         console.log(arr[i]);
//     }
// }

//Ex13
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",

// age: 100
// }
// ];

// var userName1 = users.map(function(user123){
//     return users.name = `<h1>${user123.name}</h1>`
// });
// console.log(userName1);
// var userName2 = users.map(function(user123){
//     return users.age = `<h2>${user123.age}</h2>`
// });
// console.log(userName2);

//Ex14
// var userName3 = users.map(function(user1234){
//     return users.name = user1234.name
// })
// console.log(userName3);

// Ex15
// function triple(a) { 
//     return a * 3;
//   }
//   let arr = [1, 2, 3, 4, 5];
//   var arr1 = arr.map(function multiply(arr){
//     return triple(arr)
//   })
//  console.log(arr1);


// Ex16
// var numbers = [5, 7, 28, 32, 67, 71, 190];
 
// var new_numbers = numbers.filter(function(item){
//     return (item > 5);
// });
 
// console.log(new_numbers);

// Ex17
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//   ];
// var members1 = members.filter(function(members){
//     return  members.gender == "female";
// });
// console.log(members1);

//Ex18
// const array1 = prompt("Enter your numbers").split(",");

// const found = array1.find(element => element % 2 == 0);

// console.log(found);

//Ex19
// var array = prompt("Enter your numbers").split(",");
// var x = prompt("Enter your Number2")
// findDivisibleNum(array, x)
// function findDivisibleNum(array, x) {
//     var found = array.find(element => element % x == 0);
//     console.log(found);
// }

//Ex22










  