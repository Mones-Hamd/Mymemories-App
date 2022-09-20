import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/post', postRoutes);
const URI =
  'mongodb+srv://mones1:mones12345@cluster0.jrezob1.mongodb.net/each-other?retryWrites=true&w=majority';
const PORT = 5000;
const main = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //await mongoose.set('useFindAndModify', false);
    await app.listen(PORT, () => {
      console.log(`server is running on port 5000`);
    });
  } catch (err) {
    throw err;
  }
};
main();
