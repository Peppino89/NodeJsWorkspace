import express from "expresss";
import dotenv from "dotenv";
import mongoose from "mongoose";
import keymongo from "./UriMongoDB.js"

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// connessione al database
mongoose.connect(keymongo.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("OOk sei connesso al DataBase");
}).catch((error) => {
    console.log("Si è verificato un errore alla connessione: " + error);
});


app.listen(port, () => {

    console.log(`Server running on port ${port}`);

    
});