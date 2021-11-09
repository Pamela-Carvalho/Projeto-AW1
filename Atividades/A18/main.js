// callback > promise > async/await

const fs = require('fs');

console.log('1');

// -----------como function
// function callback(error, contents){
//     console.log(error, String(contents));
// }

// -----------como arrow function
// const callback = (error, contents) => {
//     console.log(error, String(contents));
// }

// -----------callback
// fs.readFile('txt/arquivo1.txt', (error, contents) => {
//     fs.readFile('txt/arquivo2.txt', (error2, contents2) => {
//         console.log(error, String(contents));
//         console.log(error2, String(contents2));
//     });
// });

// -----------promise
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (error, contents) => {
        if(error){
            reject(error);
        }
        else{
            resolve(contents);
        }
    });
});

// readFile('txt/arquivo1.txt')
//     .then(contents => {
//         console.log(String(contents));
//         return readFile('txt/arquivo2.txt');
//     })
//     .then(contents => {
//         console.log(String(contents));
//     });

// -----------async/await - açúcar sintático em cima da promise
const init = async() => {
    try{
        const contents  = await readFile('txt/arquivo1.txt');
        const contents2 = await readFile('txt/arquivo2.txt');
        return String(contents) + '\n' + String(contents2);
    }
    catch(error){
        console.log(error);
    }
}

init().then(contents => {
    console.log(contents);
});

console.log('2');
console.log('3');