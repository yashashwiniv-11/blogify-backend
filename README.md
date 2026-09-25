# 📝 Blogify Backend

A RESTful backend API for a blogging platform built with **Node.js and Express.js**. Blogify provides user authentication, authorization, blog creation, blog retrieval, and owner-based blog deletion.

The project is designed as a practical backend development project demonstrating **REST API development, JWT authentication, password hashing, protected routes, middleware, and JSON-based data persistence**.

---

## 🚀 Features

* 👤 User Registration
* 🔐 User Login with JWT Authentication
* 🔑 Protected API Routes
* 👨‍💻 Get Current Logged-in User
* ✍️ Create Blog Posts
* 📚 Get All Published Blogs
* 📝 Get Blogs Created by the Logged-in User
* 🔎 Get a Single Blog by ID
* 🗑️ Delete Own Blog Posts
* 🔒 Password Hashing using bcryptjs
* 🌐 CORS Support
* 🆔 UUID-based IDs
* 💾 Local JSON File Database
* ⚡ RESTful API Architecture

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| **Node.js**    | Backend runtime                |
| **Express.js** | REST API framework             |
| **JWT**        | Authentication & authorization |
| **bcryptjs**   | Password hashing               |
| **CORS**       | Cross-Origin Resource Sharing  |
| **UUID**       | Unique ID generation           |
| **JSON**       | Local data persistence         |

---

## 📂 Project Structure

```text
blogify-backend/
│
├── data/
│   └── db.json
│
├── middleware/
│   └── auth.js
│
├── models/
│   └── db.js
│
├── routes/
│   ├── auth.js
│   └── blogs.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🔐 Authentication

Blogify uses **JSON Web Tokens (JWT)** for authentication.

### Authentication Flow

```text
User Registration
       ↓
Password Hashing
       ↓
User Stored in Database
       ↓
User Login
       ↓
JWT Token Generated
       ↓
Token Sent with Protected Requests
       ↓
Authentication Middleware
       ↓
Access Protected Resources
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Access  | Description                    |
| ------ | -------------------- | ------- | ------------------------------ |
| `POST` | `/api/auth/register` | Public  | Register a new user            |
| `POST` | `/api/auth/login`    | Public  | Login and receive JWT token    |
| `GET`  | `/api/auth/me`       | Private | Get current authenticated user |

### Blogs

| Method   | Endpoint         | Access  | Description                             |
| -------- | ---------------- | ------- | --------------------------------------- |
| `POST`   | `/api/blogs`     | Private | Create a new blog                       |
| `GET`    | `/api/blogs`     | Public  | Get all published blogs                 |
| `GET`    | `/api/blogs/my`  | Private | Get blogs created by the logged-in user |
| `GET`    | `/api/blogs/:id` | Public  | Get a specific blog                     |
| `DELETE` | `/api/blogs/:id` | Private | Delete your own blog                    |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yashashwiniv-11/blogify-backend.git
```

### 2. Navigate to the Project

```bash
cd blogify-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
JWT_SECRET=your_secret_key
```

> Never commit sensitive environment variables or secret keys to GitHub.

### 5. Start the Server

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

---

## 🧪 API Examples

### Register a User

**Request**

```http
POST /api/auth/register
Content-Type: application/json
```

**Body**

```json
{
  "name": "Veera",
  "email": "veera@example.com",
  "password": "123456"
}
```

---

### Login

**Request**

```http
POST /api/auth/login
Content-Type: application/json
```

**Body**

```json
{
  "email": "veera@example.com",
  "password": "123456"
}
```

The response provides a JWT token that can be used to access protected endpoints.

---

### Create a Blog

**Request**

```http
POST /api/blogs
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json
```

**Body**

```json
{
  "title": "My First Blog",
  "content": "This is the content of my blog post.",
  "category": "technology",
  "status": "published",
  "excerpt": "A short summary",
  "tags": "nodejs, express, backend"
}
```

---

## 🔑 Using JWT Authentication

For protected endpoints, include the JWT token in the request header:

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

Example:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## 💾 Data Storage

This project uses a **local JSON file** for data persistence instead of MongoDB.

The main data file is:

```text
data/db.json
```

This approach keeps the project simple and easy to run locally without requiring a separate database server.

---

## 🛡️ Security

The backend includes several basic security practices:

* Passwords are hashed using **bcryptjs**
* JWT tokens are used for authentication
* Protected routes use authentication middleware
* Blog deletion is restricted to the blog owner
* CORS is configured for cross-origin requests
* Sensitive configuration is stored using environment variables

---


## 🎯 Learning Outcomes

Through this project, I practiced:

* Building REST APIs with Express.js
* Designing backend routes
* Implementing JWT authentication
* Creating authentication middleware
* Hashing passwords securely
* Handling protected resources
* Working with HTTP methods
* Structuring a Node.js backend
* Managing data using JSON
* Testing backend APIs

---

## 👩‍💻 Author

**Veerabomma Yashashwini**

AI & ML Student | Software Developer | AI Enthusiast

### GitHub

https://github.com/yashashwiniv-11

---

## 📄 Project Information

**Project:** Blogify Backend
**Module:** Backend Development – Module 2
**Technology:** Node.js + Express.js
**Database:** Local JSON
**Authentication:** JWT
**License:** For educational and portfolio purposes

---


