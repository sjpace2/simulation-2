const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');
app.use(bodyParser.json());
require('dotenv').config();

const { CONNECTION_STRING, PORT } = process.env;


massive( CONNECTION_STRING )
    .then( db => {
        app.set('db', db)
        console.log('DB Connected')
    })
    .catch( err=>console.log(err));

app.use(express.static( `${__dirname}/../build`));

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


app.listen( PORT || 3005, () => console.log(`Listening on port ${PORT || 3005}`));


