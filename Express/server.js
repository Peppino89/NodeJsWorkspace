//per avviare il server digitare sul temrinale: npm run server

import express from 'express';
import myApi from './routes/api/myApi.js';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send("Helloo");
// })

app.use('/test', myApi);

app.listen(port, () => {
    console.log("connesso sulla porta: " + port);
})