import { Router } from 'express'

import { getAllPosts, createPost, updatePostLikes, deletePost } from '../src/controllers/postsControllers.js'

const router = Router()

router.get('/posts', getAllPosts)
router.post('/posts', createPost)
router.put('/posts/like/:id', updatePostLikes)
router.delete('/posts/:id', deletePost)

export default router
