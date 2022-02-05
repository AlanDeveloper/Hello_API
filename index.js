const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Habilita variáveis de ambiente

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Declara qual biblioteca será utilizada para fazer o parsing
app.use(express.json()); // Transforma solicitações em JSON
app.use(cors()); // Habilita o CORS

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Express started at in ${PORT}`);
});