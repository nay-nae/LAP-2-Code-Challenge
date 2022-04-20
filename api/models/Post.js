const db = require('../dbConfig/init');

class Post {
  constructor(data) {
    this.title = data.title;
    this.story = data.story;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(`SELECT * FROM posts`);
        let posts = postData.rows.map((b) => new Post(b));
        resolve(posts);
      } catch (err) {
        reject('post not found');
      }
    });
  }

  static async create(postData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, story } = Data;
        let result = await db.query(
          `INSERT INTO books (title, yearOfPublication, abstract, authorName) VALUES ($1, $2, $3, $4) RETURNING *;`,
          [title, story]
        );
        resolve(result.rows[0]);
      } catch (err) {
        reject('Book could not be created');
      }
    });
  }
}

module.exports = Post;
