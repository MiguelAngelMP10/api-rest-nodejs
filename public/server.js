import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan('combined'))

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 8080;

import routerApi from "../routes/api.js";
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
 app.use("/api", routerApi);


//arrancamos el servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);
