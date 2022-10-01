import mongoose from 'mongoose';
import config from './index.js'

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Trying connect to DB');
});

db.on('connected', () => {
  console.log('DB connected');
});

db.on('error', () => {
  console.log('Connection error');
});

export default () => {mongoose.connect(config.database.uri);}