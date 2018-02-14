import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = {
  name: String,
  year: Number,
  description: String,
  picture: String,
  postDate: { type: Date, default: Date }
};

export default mongoose.model('Game', gameSchema);
