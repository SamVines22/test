
function firstTest(name) {
    return `Hello, ${name}`;
}

function secondTest(a,b){
    return a + b;
}

function capitalize(string) {
    return string.toUpperCase();
}

function reverseString(string) {
    let len = string.length;
    let list = [];
    for (let x = len -1; x>=0; x--)
    {
        list.push(string[x]);
    }
    return list.join("");

}

function calculator() {

    const add = function(a,b) {
        return a + b;
    }
    const subtract = function (a,b) {
        return a - b;
    }
    const divide = function (a,b) {
        return a/b;
    }
    const multiply = function(a,b) {
        return a*b;
    }
    return {add, subtract, divide, multiply}
}

function caesar(string, shift) {

    console.log(string);
    console.log(shift);
    let factor = shift%26;
    let list = [];
    for (let x = 0; x < string.length; x++)
    {
        let code = string.charCodeAt(x);
        if ((code >=65 && code+factor <= 90)|| (code >= 97 && code+factor <= 122)){
            list.push(code + factor);
        }
        else if(code >=65 && code+factor >90) 
        {
            list.push(code+factor - 26);
        }
        else if ((code >=97 && code+factor >122))
        {
            list.push(code + factor - 26);
        }
        else {
            list.push(code);
        }
    }
    console.log(list);
    let text = "";
    for (let x = 0; x< list.length; x++)
    {
        text+= String.fromCharCode(list[x]);
    }
    console.log(text);
    return text;

}

function analyseArray(arr) {

   let length = arr.length;
   let count = 0;
   let max = arr[0];
   let min = arr[0];

   for (let x = 0; x< length; x++)
   {
    count+=arr[x];
    if (arr[x] > max)
    {
        max = arr[x];
    }
    if (arr[x] < min)
    {
        min = arr[x];
    }
   }
   const average = count / length;

    let obj = {
        "average": average,
        "min":min,
        "max":max,
        "length": length
    }
    return obj;

}


module.exports = {firstTest, secondTest, capitalize, reverseString, calculator, caesar, analyseArray};