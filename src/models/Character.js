import mongoose from 'mongoose';
import animeSchema from './Anime.js';


const characterSchema = new mongoose.Schema({
  name: String,
  picture: String,
  seiyu: String,
  anime: animeSchema
});

export default mongoose.model('Character', characterSchema);