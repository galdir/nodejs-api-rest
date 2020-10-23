const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('voce esta na rota de atendimentos e esta realizando um get'));

    app.post('/atendimentos',(req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento);
        //console.log('atendimento enviado')
        //console.log(req.body);
        res.send('voce esta na rota de atendimentos e esta realizando um post');
    });
}