const express = require('express');

const OngController = require ('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

//login
routes.post('/session', SessionController.create);

// busca ongs
routes.get('/ongs', OngController.index);
//insere ongs e retorna o id aleatório para o usuário
routes.post('/ongs', OngController.create);

//busca casos específicos de determinada ong
routes.get('/profile', ProfileController.index);

// busca casos
routes.get('/incidents', IncidentController.index);
//insere os casos e retorna o id do array
routes.post('/incidents', IncidentController.create); 
//deleta um caso específico da tabela incidents
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 