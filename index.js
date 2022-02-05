const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Express started at in ${PORT}`);
});