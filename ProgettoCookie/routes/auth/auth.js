/** E' solo una prova per capire come funziona next */

import dotenv from "dotenv";

dotenv.config();






export const auth = (req, res, next) => {
    
    if (req.body.password === process.env.PASSWORD) {
        return next(); //se il controllo va a buon fine passo alla funzione successiva dopo auth
        //res.redirect('/api/login');
    }
    else {
        res.status(401).send("Spiacente non sei autorizzato.");
    }

};


