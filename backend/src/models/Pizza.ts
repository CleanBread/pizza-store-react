import mongoose, { Schema } from 'mongoose';

const PizzaSchema = new Schema({
  imageUrl: String,
  name: String,
  types: Array,
  sizes: Array,
  price: Number,
  category: Number,
  rating: Number,
});

const PizzaModel = mongoose.model('Pizza', PizzaSchema);

export default PizzaModel;
