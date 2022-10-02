import express from 'express';

import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import { connectDb } from './connection/connection.js';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '60mb', extended: true }));
app.use(cors());
app.use('/', postRoutes);
app.use('/user', userRoutes);
const PORT = 5000;

const main = async () => {
  try {
    await connectDb();
    await app.listen(PORT, () => {
      console.log(`server is running on port 5000`);
    });
  } catch (err) {
    throw err;
  }
};
main();
