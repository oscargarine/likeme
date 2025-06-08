import pool from '../../db/schema/config.js'

export const getPostsModel = async () => {
  const sqlQuery = 'SELECT * FROM posts'
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
}

export const createPostModel = async (titulo, img, descripcion) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
    values: [titulo, img, descripcion]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post agregado', result)
  return result.rows
}
