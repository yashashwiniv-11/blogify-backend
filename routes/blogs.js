const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { readDB, writeDB } = require('../models/db');
const { protect } = require('../middleware/auth');

const router = express.Router();

// POST /api/blogs  - Create Blog (Protected)
router.post('/', protect, (req, res) => {
  try {
    const { title, excerpt, content, category, status, tags } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, content and category'
      });
    }

    let tagsArray = [];
    if (tags) {
      if (typeof tags === 'string') {
        tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);
      } else if (Array.isArray(tags)) {
        tagsArray = tags;
      }
    }

    const db = readDB();

    const newBlog = {
      id: uuidv4(),
      title,
      excerpt: excerpt || '',
      content,
      category,
      status: status || 'published',
      tags: tagsArray,
      author: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    db.blogs.push(newBlog);
    writeDB(db);

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newBlog
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error while creating blog' });
  }
});

// GET /api/blogs  - Get all published blogs
router.get('/', (req, res) => {
  try {
    const db = readDB();
    const blogs = db.blogs
      .filter(b => b.status === 'published')
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error while fetching blogs' });
  }
});

// GET /api/blogs/my  - Get blogs of logged-in user
router.get('/my', protect, (req, res) => {
  try {
    const db = readDB();
    const blogs = db.blogs
      .filter(b => b.author.id === req.user.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET /api/blogs/:id
router.get('/:id', (req, res) => {
  try {
    const db = readDB();
    const blog = db.blogs.find(b => b.id === req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// DELETE /api/blogs/:id
router.delete('/:id', protect, (req, res) => {
  try {
    const db = readDB();
    const index = db.blogs.findIndex(b => b.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    if (db.blogs[index].author.id !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this blog' });
    }

    db.blogs.splice(index, 1);
    writeDB(db);

    res.status(200).json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
