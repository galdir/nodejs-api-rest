module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('voce esta na rota de atendimentos e esta realizando um get'));

    app.post('/atendimentos',(req, res) => res.send('voce esta na rota de atendimentos e esta realiando um post'))
}