require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const controller = require('./controller');

const {
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env;


const app = express();

app.use(bodyParser.json());
app.use( express.static('public') );
// massive(CONNECTION_STRING).then(db => {
//     app.set('db', db)
// });



massive({
    host: 'ec2-54-235-212-58.compute-1.amazonaws.com',
    port:'5432',
    database:'dhufe0at70snj',
    user:'xftdhbkedqctxv',
    password: '4cfb25e5b794aefc47ba472ccc45eb1bc64018779e11a56067ca99cf3685cde6',
    ssl: true
  }).then(function(db) {
    app.set('db', db);
  });

  
app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.createHouses);
app.delete('/api/houses/:id', controller.deleteHouses);




app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))




//ALTER TABLE houses ADD COLUMN image TEXT
