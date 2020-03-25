const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routs = express.Router();

routs.post('/sessions',SessionController.create);

routs.get('/ongs', OngController.index);
routs.post('/ongs', OngController.create);

routs.get('/profile', ProfileController.index);

routs.get('/incidents', IncidentController.index);
routs.post('/incidents', IncidentController.create);
routs.delete('/incidents/:id', IncidentController.delete );

module.exports = routs;