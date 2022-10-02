import express from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
import auth from '../middl/auth.js';
const router = express.Router();
router.get('/api/posts', getPost);
router.post('/api/posts', auth, createPost);
router.put('/api/posts/:id', auth, updatePost);
router.delete('/api/posts/:id', auth, deletePost);
router.put('/api/posts/:id/likes', auth, likePost);

export default router;
