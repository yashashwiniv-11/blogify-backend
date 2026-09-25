# Blogify Backend – Module 2

A complete REST API backend for a Blog application built with **Node.js** and **Express.js**.

## Features

- User Registration
- User Login (JWT Authentication)
- Create Blog Post
- Get All Blogs
- Get My Blogs
- Delete Blog (owner only)

**No MongoDB required** — data is stored in a local JSON file.

## Tech Stack

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- CORS
- UUID

## API Endpoints

| Method | Endpoint              | Access   | Description                  |
|--------|-----------------------|----------|------------------------------|
| POST   | /api/auth/register    | Public   | Register a new user          |
| POST   | /api/auth/login       | Public   | Login and get JWT token      |
| GET    | /api/auth/me          | Private  | Get current logged-in user   |
| POST   | /api/blogs            | Private  | Create a new blog post       |
| GET    | /api/blogs            | Public   | Get all published blogs      |
| GET    | /api/blogs/my         | Private  | Get blogs of logged-in user  |
| GET    | /api/blogs/:id        | Public   | Get single blog by ID        |
| DELETE | /api/blogs/:id        | Private  | Delete your own blog         |

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start
```

Server will run at: **http://localhost:5000**

## Example Requests

### Register
```http
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Veera",
  "email": "veera@example.com",
  "password": "123456"
}
```

### Login
```http
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "veera@example.com",
  "password": "123456"
}
```

### Create Blog
```http
POST http://localhost:5000/api/blogs
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "This is the content of my blog post.",
  "category": "technology",
  "status": "published",
  "excerpt": "A short summary",
  "tags": "nodejs, express, backend"
}
```

## Project Structure

```
backend/
├── server.js
├── package.json
├── .env
├── data/
│   └── db.json
├── models/
│   └── db.js
├── routes/
│   ├── auth.js
│   └── blogs.js
└── middleware/
    └── auth.js
```

## Submission

- **Module 2** – Backend Development
- Day 5 – Day 8 · Intermediate Level
- APIs: User Registration, User Login, Create Blog

---

Made with ❤️ for Module 2 Backend Development Challenge
