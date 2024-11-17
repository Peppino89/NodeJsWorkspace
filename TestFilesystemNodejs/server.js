//Per testare aprire il terminale spostarsi sulla cartella del progetto e lanciare
//il seguente comando: node server.js /Users/pino/Desktop ProvaDati.txt nell mezzo del cammino di nostra vita

import process from 'process';
import fs from 'fs';



let path = process.argv[2];
let filename = process.argv[3];
let data2 = process.argv.slice(4);


const myData = (data2) => {
    let str = "";
    data2.forEach((element, i) => {

        str += element + " ";
    });
    return str;
}




//versione Asincrona
fs.appendFile(`${path}/${filename}.txt`, "\n" + myData(data2), (error) => {
    if (error) {
        console.log(error);
        return;
    }

});




//versione sincrona
data2.forEach((element, i) => {
    try {

        fs.appendFileSync(`${path}/${filename}.txt`, `${element} `);
    }
    catch (err) {
        console.log("Errore qualcosa è andato storto: " + err);
    }

});





//versione Promise
// data2.forEach((element) => {

//     fs.promises.appendFile(`${path}/${filename}.txt`, `${element} `).then(() => {
//     }).catch((error) => {
//         console.log("Oh Oh! Qaulcosa è andato storto?! " + error);
//     });

// });


