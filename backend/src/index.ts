import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { PizzaController } from './controllers';

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

mongoose.connect('mongodb://localhost:27017/store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const Pizza = new PizzaController();

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/newpizza', Pizza.create);
app.get('/pizzas', Pizza.pizzas);

app.listen(3232, function () {
  console.log(`server: http://localhost:${3232}`);
});
