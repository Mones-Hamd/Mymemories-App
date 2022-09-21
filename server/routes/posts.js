import express from 'express';
import { getPost, createPost } from '../controllers/posts.js';
const router = express.Router();
router.get('/api/posts', getPost);
router.post('/api/posts', createPost);

export default router;
