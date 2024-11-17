//nota per avviare il server digitare npm run server

import  express  from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import router from "./routes/api/myapi.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//import session from "express-session";


const app = express();
const port = 3000;
dotenv.config();

app.use(cors());//serve per abilitare il cors per far comunicare il backend e frontend
app.use(express.json());//serve a gestire le richieste in formato json
app.use(express.urlencoded({ extended: true })); //serve a gestire le richieste in formato text/html
app.use(cookieParser());
//app.use(session({secret: 'Pippo',cookie:{}}));

// connessione al database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("OOk sei connesso al DataBase");
}).catch((error) => {
    console.log("Si è verificato un errore alla connessione: " + error);
});


//Gestione delle mie API
app.use("/api",router);


//connessione al server
app.listen(port, () => { 

    console.log(`connecting on port ${port}`);

});