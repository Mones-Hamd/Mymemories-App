import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://mones1:mones12345@cluster0.jrezob1.mongodb.net/memories?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log(`mongoose is connect: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
