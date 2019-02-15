const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const app = express();

const ctrl= require('./controller.js')


app.use( bodyParser.json() );

const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance);
    // console.log(111111111,CONNECTION_STRING)
})

const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port 4000 ${port}.`); } );



// app.get('api/all', ctrl.getProduct)