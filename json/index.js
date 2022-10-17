// https://jsonpathfinder.com/
// https://jsonplaceholder.typicode.com/  // jason  fack data


const data= require("./frinds_data.json"); //accessing json file and store in 'data'
// console.log(data); //to print data

//accessing data
// console.log(data.friends[0]);
// console.log(data.friends[0].name);

//modify name
// data.friends[0].name='i am not asis'
// console.log(data.friends[0])

// deleting age
// delete data.friends[1].age
// console.log(data.friends[1])

//use loop to prid data
for(i in data){
    console.log(i);
    console.log(data[i])
}