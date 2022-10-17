// convert into json format > JSON.stringify(js_object)
//convert into js obj > JSON.parse(json_data)

// js to json convert
const data2={
    name:'asis',
    age:24
};

console.log(JSON.stringify(data2));

//json to js convert
// 1
console.log(JSON.parse('{"name":"asus","age":90}'));

// 2
// showing error

// const data={
//     "friends":[ 
// 		{
// 			"name":"asis", 
// 			"age":29
// 		},
// 		{
// 			"name":"rahul",
// 			"age":89
// 		}
// 	]
// } ;   

// console.log(JSON.parse(data));
