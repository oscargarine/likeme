import pool from '../../db/schema/config.js'

// getPostsModel (SELECT)
export const getPostsModel = async () => {
  const sqlQuery = 'SELECT * FROM posts'
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
}

// createPostModel (INSERT)
export const createPostModel = async (titulo, img, descripcion) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
    values: [titulo, img, descripcion]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post agregado', result)
  return result.rows
}

// updatePostModel (UPDATE)
// likes = likes + 1 es la funcion más eficiente para conteo multiple
export const updatePostLikesModel = async (id) => {
  const sqlQuery = {
    text: 'UPDATE posts SET likes = likes +1 WHERE id = $1 RETURNING *',
    values: [id]
  }

  const result = await pool.query(sqlQuery)
  console.log('Like agregado', result)
  return result.rows[0]
}

// deletePostModel (DELETE)
export const deletePostModel = async (id) => {
  const sqlQuery = {
    text: 'DELETE FROM posts WHERE id = $1 RETURNING *',
    values: [id]
  }

  const result = await pool.query(sqlQuery)
  return result.rows[0]
}
