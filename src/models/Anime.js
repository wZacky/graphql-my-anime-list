import mongoose from 'mongoose';

const animeSchema = mongoose.Schema({
  name: String,
  picture: String
});

export default animeSchema;