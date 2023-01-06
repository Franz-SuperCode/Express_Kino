import express from 'express';
import cors from 'cors';
import multer from 'multer';
import './config/config.js'

const app = express();
//Den Port holen wir aus der .env-Datei
const PORT = process.env.PORT;

app.listen(PORT, () => console.log("PORT: ", PORT));