import mongoose from 'mongoose';
import postMessage from '../models/postMessage.js';
export const getPost = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ msg: err.msg });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new postMessage(post);
  try {
    await newPost.save(newPost);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ msg: err.msg });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id');
  const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id');
  await postMessage.findByIdAndRemove(id);
  res.json({ message: 'post deleted successfully' });
};
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id');
  const post = await postMessage.findById(id);
  const updatedPost = await postMessage.findByIdAndUpdate(
    id,
    { likesCount: post.likesCount + 1 },
    {
      new: true,
    },
  );
  res.json(updatedPost);
};
