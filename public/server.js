import express from "express";
import morgan from "morgan";
import config from "dotenv";
import cors from "cors"
config.config();
const app = express();

app.use(morgan("tiny"));

app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 8080;

import routerApi from "../routes/api.js";
import routeAuth from "../routes/auth.js";
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use("/api", routeAuth);
app.use("/api", routerApi);

//arrancamos el servidor
let host = process.env.HOST || "localhost";
app.listen(port, host);
console.log(`API escuchando en el puerto http://${host}:${port}`);
