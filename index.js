//inciar o express (framework Node.js)
const express = require('express');
const app = require('express')();

// Mostrar a porta que o servidor está rodando
app.listen(3000, () => {console.log('Servidor rodando na porta 3000')});

// Rota para template.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/template.html');
});

// Rota para a página inicial
app.get('/skills', (req, res) => {
    res.send('Olá Mundo! Javascript e Node.js');
});

// Rota para a página inicial
app.get('/objeto', (req, res) => {
    res.send({
        javascript: '100%',
        node: '100%',
        react: '100%',
        next: '100%',
        typescript: '100%',
        express: '100%',
        mongodb: '100%'
    });
});


// Rota para testar script.js
app.get('/script', function(req, res) {
    res.sendFile(__dirname + '/script.js');
});

//rota teste https://www.youtube.com/watch?v=TITvGENBBkY
app.get("/teste", function(req, res){
    var myname = req.query["myname"];
    
    if(myname){
        res.send(myname);
    }else{
        res.send("Nada aqui, amigo");
    }
});