import express from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
const router = express.Router();
router.get('/api/posts', getPost);
router.post('/api/posts', createPost);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);
router.put('/api/posts/:id/likes', likePost);

export default router;
