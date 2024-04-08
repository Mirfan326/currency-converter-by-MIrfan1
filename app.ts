// Currency Converter in Typescript by MIrfan

// The TypeScript console app is used to convert currencies the users
// enter a certain amount of money in one currency and set the currency
// they want to check the monetary value of.

// While developing the app, the beginners can master variables,algorithms,
// loops, if statements, and other TypeScript concepts.


// packages install: tsc --init and npm init -y and 

//  npm i @types/node -D then set "type ",module, and es2022, module, 
//  set nodenext and module resolution: nodenext then 
//  finally insatall inquirer: npm install inquirer then npm fund run command. 
// write inquirer prompt run it command: npm i @types/node -D 

// step 1 currency converter rates

import inquirer from "inquirer"

// In PkR

let Conversion ={
    "PKR": {
        "USD": 0.00036,
        "GPB": 0.0037,
        "PKR": 1
    },
// In GPB

"GPB":{
    "USD": 1.21,
    "PKR": 350,
    "GPB":1
},

// In Dollars

    "USD": {
    "PKR":277.56,
    "GPB":0.85,
    "USD": 1
    }


}

// step 2: using Inquirer

const answer: {
    from: "PKR" | "USD" | "GPB",
    to:   "PKR"  |"USD" | "GPB",

    // Parameter Data Typees Add 
    amount: number
} = await inquirer.prompt([

    {

        type:"list",
        name:"from",
        choices:["PKR","USD","GPB"],
        message: "Select your currency..?"
    },

    {

        type:"list",
        name:"to",
        choices:["PKR","USD","GPB"],
        message:"Select your conversion currency"
    },

    {
        type:"number",
        name:"amount",
        message:"Enter your conversion amount"

    }

])
// step 3 outputs declared

const {from,to,amount}=answer;

// check input in given programs

if(from && to && amount){

    // formula
    let result = Conversion [from] [to] * amount
    console.log(`your conversion from ${from} to ${to} is ${result}`)

}else{

    // generate eror
    console.log("invalid input")
}


