import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";

const app = express();
const PORT = 3000;
dotenv.config();

app.use(cors());//serve per abilitare il cors per far comunicare il backend e frontend
app.use(express.json());//serve a gestire le richieste in formato json
app.use(express.urlencoded({ extended: true })); //serve a gestire le richieste in formato text/html


//Connessione al DB
mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log("OOk sei connesso al DataBase");
}).catch((error) => {
    console.log("Si è verificato un errore alla connessione: " + error);
});


//Middleware per la sessione
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

//routes



app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
});
