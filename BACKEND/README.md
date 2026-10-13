# ⚙️ Backend - Introduction to New Products API

RESTful API backend for the **Introduction to New Products** web application, built with **Node.js**, **Express.js**, and **MongoDB (Mongoose ODM)** with multi-image upload handling via **Multer**.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
  - [Product Endpoints](#product-endpoints)
  - [User & Authentication Endpoints](#user--authentication-endpoints)
  - [Static Assets](#static-assets)
- [Database Models](#-database-models)
- [Available Scripts](#-available-scripts)

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (v16+)
- **Web Framework**: [Express.js](https://expressjs.com/) (v4.18)
- **Database & ODM**: [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/) (v7.6)
- **File Uploads**: [Multer](https://github.com/expressjs/multer)
- **Middleware**: `cors`, `body-parser`, `dotenv`
- **Development Tooling**: `nodemon`

---

## 📁 Folder Structure

```text
BACKEND/
├── models/
│   ├── product.js          # Product schema (name, category, description, images)
│   └── user.js             # User credentials schema
├── routes/
│   ├── products.js         # Product CRUD & search endpoints
│   └── users.js            # User registration & login endpoints
├── uploads/                # Directory for uploaded product images
├── .env.example            # Environment variables template
├── package.json            # Dependencies and npm scripts
├── server.js               # Express application entry point
└── README.md               # Backend documentation
```

---

## ⚙️ Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Active local MongoDB service (`mongodb://127.0.0.1:27017`) or a MongoDB Atlas cluster URI

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the `BACKEND` directory (copy from `.env.example`):
```bash
cp .env.example .env
```

Set your configuration in `.env`:
```env
PORT=8070
MONGODB_URL=mongodb://127.0.0.1:27017/Product_db
```

### 3. Run the Server
```bash
# Production / Normal Start
npm start

# Development (with auto-restart via nodemon)
npm run dev
```

The server will be available at `http://localhost:8070`.

---

## 🔑 Environment Variables

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Listening port for Express | `8070` |
| `MONGODB_URL` | MongoDB connection URI | `mongodb://127.0.0.1:27017/Product_db` |

---

## 📡 API Reference

Base URL: `http://localhost:8070`

### Product Endpoints

#### 1. Retrieve All Products
- **Method**: `GET`
- **Endpoint**: `/product/`
- **Response**: Array of product objects (`200 OK`)

#### 2. Add New Product
- **Method**: `POST`
- **Endpoint**: `/product/add`
- **Content-Type**: `multipart/form-data`
- **Body Fields**:
  - `productname` (string)
  - `categories` (string)
  - `discription` (string)
  - `images` (file / files, max 5)
- **Response**: `{"message": "Product added"}` (`201 Created`)

#### 3. Get Product by Name
- **Method**: `GET`
- **Endpoint**: `/product/get/:productname`
- **Response**: `{"status": "product fetched", "systemproduct": {...}}` (`200 OK`)

#### 4. Get Product by Category
- **Method**: `GET`
- **Endpoint**: `/product/get_categories/:categories`
- **Response**: `{"status": "product fetched", "systemproduct": {...}}` (`200 OK`)

#### 5. Search Products
- **Method**: `GET`
- **Endpoint**: `/product/search?keyword=:query`
- **Response**: `{"message": "Search results", "results": [...]}` (`200 OK`)

#### 6. Update Product
- **Method**: `PUT`
- **Endpoint**: `/product/update/:id`
- **Content-Type**: `application/json`
- **Body**: JSON object containing fields to update
- **Response**: Updated product object (`200 OK`)

#### 7. Delete Product
- **Method**: `DELETE`
- **Endpoint**: `/product/delete/:productid`
- **Response**: `{"status": "Product deleted"}` (`200 OK`)

---

### User & Authentication Endpoints

#### 1. Register User
- **Method**: `POST`
- **Endpoint**: `/user/add`
- **Content-Type**: `application/json`
- **Body**: `{"username": "...", "password": "..."}`
- **Response**: 
  - `"notexist"` (User created successfully)
  - `"exist"` (User already exists)

#### 2. User Login
- **Method**: `POST`
- **Endpoint**: `/user/get/login`
- **Content-Type**: `application/json`
- **Body**: `{"username": "...", "password": "..."}`
- **Response**:
  - `"exist"` (Authentication successful)
  - `"notexist"` (Invalid credentials)

---

### Static Assets

Uploaded product images are served statically:
- **URL**: `http://localhost:8070/uploads/:filename`

---

## 🗄️ Database Models

### Product Schema (`models/product.js`)
```javascript
{
  categories: { type: String, required: true },
  productname: { type: String, required: true },
  discription: { type: String, required: true },
  images: [
    {
      filename: { type: String, required: true }
    }
  ]
}
```

### User Schema (`models/user.js`)
```javascript
{
  username: { type: String, required: true },
  password: { type: String, required: true }
}
```

---

## 📜 Available Scripts

- `npm start`: Starts the server (`node server.js`)
- `npm run dev`: Runs the server with `nodemon server.js` for development
