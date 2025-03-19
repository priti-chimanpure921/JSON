//converting JS object into JSON format
let student = {
    name : "Priti",
    age : 36
};
console.log(student);// JS object
let JSON_format = JSON.stringify(student);
console.log(JSON_format);// JSON format

//converting JSON data into JS OBject
let JSON_data = '{"fact" : "Cat is a four legged animal","color" : "white"}';

console.log(JSON_data);
console.log(JSON_data.fact);// this will give an error as it is string data

let JS_obj = JSON.parse(JSON_data);
console.log(JS_obj);

console.log(JS_obj.fact);


