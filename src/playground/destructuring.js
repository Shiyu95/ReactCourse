//@ts-nocheck
//object destucturing
// const person = {
//     name:'Shiyu',
//     age:22,
//     location:{
//         city:'PA',
//         temp:92 }
// }; 
// //only use default value 'Anonymous' when the object don't define variable name
// const { name:firstName ="Anonymous", age} = person;
// //can rename variable name
// const { city, temp:temperature} = person.location

// console.log(`${firstName} is ${age}.`);

// if(city&& temperature){
//     console.log(`${temperature} in ${city}`);
// }



// const book={
//     title:'Rgo is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguib'
//     }
// };
// const {name:publisherName ='self-Publisher'} = book.publisher;
// console.log(`${publisherName}`);





//Array distructuring
const address= ['1299 sJuniper Street','Philadephia','PA',"19147"];
//cam onlt destructuring the item that you want
//can skip decleare name for the item you don't care about 
//can set default value for array distructuring eg;NewYork
const [, city, state = 'NewYork'] = address;
console.log(`you are in ${city} ${state}`);



const item =['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, small, medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}`);