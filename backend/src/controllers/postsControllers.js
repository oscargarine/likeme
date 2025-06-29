import { getPostsModel, createPostModel, deletePostModel, updatePostLikesModel } from '../models/postsModel.js'

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

// Put - Like
export const updatePostLikes = async (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ message: 'Se requiere el id de la publicación' })
  }

  try {
    const postLike = await updatePostLikesModel(id)
    // res.json(postLike)
    res.status(200).json({
      message: 'Like actualizado',
      post: postLike
    })
    console.log('Like actualizado')
  } catch (error) {
    res.json({ error: 'Error al actualizar' })
    console.error(error)
  }
}

// DELETE Post
export const deletePost = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ message: 'Se requiere el id de una publicación' })
  }

  try {
    const post = await deletePostModel(id)
    // res.json(post)
    res.status(200).json({
      message: 'Like actualizado',
      post: post
    })
    console.log('Like actualizado')
  } catch (error) {
    res.json({ error: 'No se puede borrar la publicación' })
    console.error(error)
  }
}
