const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');


module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }))  // metodo do express recebendo de formulario (urlencoded)
    app.use(bodyParser.json())
    

    consign()
        .include('controllers')
        .into(app);

    return app;
}
