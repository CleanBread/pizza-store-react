import express from 'express';

import { PizzaModel } from '../models';

class PizzaController {
  create(req: express.Request, res: express.Response) {
    console.log(req);
    const postData = {
      imageUrl: req.body.imageUrl,
      name: req.body.name,
      types: req.body.types,
      sizes: req.body.sizes,
      price: req.body.price,
      category: req.body.category,
      rating: req.body.rating,
    };

    const pizza = new PizzaModel(postData);

    pizza
      .save()
      .then(() => {
        res.json(req.body);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  pizzas(_: express.Request, res: express.Response) {
    PizzaModel.find()
      .then((pizzas) => {
        res.json(pizzas);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

export default PizzaController;
