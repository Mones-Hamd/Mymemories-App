import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tage: [String],
  selectedFile: String,
  likesCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const postMessage = mongoose.model('postMessage', postSchema);
export default postMessage;
