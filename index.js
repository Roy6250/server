const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 5000;
const customers = [
  {
    id: 5,
    first_name: 'Vivek',
    last_name: 'Rai'
  },
  {
    id: 6,
    first_name: 'Roy',
    last_name: 'Sayantan',
    test:"Success"
  }
];

const cloud = [
  {
    id: 0,
    first_name: 'amazon',
    last_name: 'web services'
  },
  {
    id: 1,
    first_name: 'google',
    last_name: 'cloud services'
  }
];


const clients = [
  {
    id: 1,
    first_name: 'Haha',
    last_name: 'Hehe'
  },
  {
    id: 2,
    first_name: 'Lala',
    last_name: 'Lili'
  }
];

app.use(bodyParser.json());

app.get('/api/v1/customers', (req, res) => {
  console.log(req.headers);
  res.json(customers);
});

app.get('/api/v1/customers/:id', (req, res) => {
  res.json(customers[req.params.id]);
});

app.get('/api/v1/cloud', (req, res) => {
  res.json(cloud);
});


app.get('/api/v1/clients', (req, res) => {
  res.json(clients);
});

app.get('/api/v1/clients/:id', (req, res) => {
  res.json(clients[req.params.id]);
});



// export default app;

// export {app}

module.exports={
  app

}