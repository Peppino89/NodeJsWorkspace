//Ricorda per avviare il server digitare npm run server
//Gestione File System with nodejs modalità asicrona
//const fs = require('fs');
import fs from 'fs';
//const path = require('path');


//lettura asincrona di un file

// fs.readFile('./Texts/prova.txt', { encoding: 'utf8' }, (error, data) => {
//     if (error) {
//         console.log("Errore Lettura: " + error);
//         return
//     }
//     else {

//         console.log(data);

//     }
// });


//Lettura di una directory

// fs.readdir('/Users/pino/Desktop/MERNWorkspace', (error, files) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     else {
//         files.forEach((file) => {
//             if (file !== '.DS_Store') {
//                 console.log(file + "\n");
//             }

//         });
//     }
//     //console.log(files[1] + " " + files[2]);
// });

//let dati = ["Pippo", "Ciao Mondo", "Nel mezzo del cammin di nostra vita"];

//scrittura su un file modalità sincrona
// dati.forEach((val) => {

//     try {
//         appendFileSync('./Texts/provaDue.txt', `${val}\n`);
//         console.log('The "data to append" was appended to file!');
//     } catch (err) {
//         /* Handle the error */
//     }

// });

//scrittura su un file modalità asincrona

// dati.forEach((val) => {
//     fs.appendFile('./Texts/provaDue.txt', `${val}\n`, (error) => {
//         if (error) {
//             console.log(error);
//             return;
//         }
//         console.log("I dati sono stati copiati correttamente!");
//     });

// });

//versione Promise

// dati.forEach((val) => {
//     fs.promises.appendFile('./Texts/provaDue.txt', `${val}\n`)
//         .then(() => {
//             console.log("I dati sono stati copiati correttamente!")
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });


