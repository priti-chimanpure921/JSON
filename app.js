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

//Our first API request using fetch()
let url = "https://catfact.ninja/fact";

/*
fetch(url)
.then((response)=>{
    console.log(response);
    // console.log(response.json());// this method again returns a promise
    response.json().then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.log(err);
});
*/

//using method chaining
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();// parse data
})
.then((data)=>{
    console.log("fact 1 : " , data.fact);
    return fetch(url);//another request and so on 
})
.then((res)=>{
    console.log(res);
    return res.json();// parse data
})
.then((data)=>{
    console.log("fact 2 : " , data.fact);
})
.catch((err)=>{
    console.log(err);
});

console.log("This will print first as API calls are asynchronous");

//using async and await keywords
async function getCatFact()
{
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        console.log("fact is :" , res);
        console.log(data.fact);
    }
    catch(error)
    {
        console.log(error);
    }
}
getCatFact();


