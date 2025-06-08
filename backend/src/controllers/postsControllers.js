import { getPostsModel, createPostModel } from '../models/postsModel.js'

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsModel() // llamamos al modelo
    res.json({ posts })
  } catch (error) {
    console.error(error)
    res.json({ error: 'Error al procesar la solicitud' })
  }
}

export const createPost = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body
    const newPost = await createPostModel(titulo, url, descripcion)
    res.json({ post: newPost })
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
    console.log(error)
  }
}
