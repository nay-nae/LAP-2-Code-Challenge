const Post = require('../models/Post');

async function show(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function create(req, res) {
  try {
    const book = await Post.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { show, create };
