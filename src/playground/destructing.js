// // object destructuring
// const person={
//     name: 'satyam',
//     age:'23',
//     location:{
//         city:'gurgaon',
//         temp:57
//     }
// }

// const {name: firstname='anonymous',age}=person;
// const {city,temp: temprature}=person.location;
// console.log(`${firstname} and ${age}`);
// console.log(`${city} and ${temprature}`);


// array destructuring

const address=[]

const [house,gali='45',village,sector,city,pin]=address;

console.log(`${address[0]}, ${gali}, $`);