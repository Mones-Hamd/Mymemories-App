import express from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';
const router = express.Router();
router.get('/api/posts', getPost);
router.post('/api/posts', createPost);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);

export default router;
