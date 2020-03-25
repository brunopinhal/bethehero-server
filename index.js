const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Semana Oministack 11.0',
        aluno: 'Bruno Pinhal'
    });
});

app.listen(3333);