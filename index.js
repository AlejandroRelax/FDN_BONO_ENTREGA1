const {crearArchivo} = require ('./logica');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
     res.send(crearArchivo());
   });
app.listen(3000);