# 🚀 Introduction to New Products - Web Platform

A modern, full-stack MERN application for discovering, showcasing, and managing newly introduced products. The platform includes a responsive user portal with categorized product browsing, real-time search, interactive contact forms, and an administrative dashboard for product CRUD operations with image uploads.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Folder Structure](#-architecture--folder-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **🏠 Landing & Showcase**: Dynamic homepage featuring newly launched products.
- **📦 Product Catalog**: Grid view of all products with image galleries, pricing, and descriptions.
- **🏷️ Category Filtering**: Browse and filter products by categorized segments.
- **🔍 Real-Time Search**: Search products across names and categories with regex querying.
- **📊 Product Management Dashboard**:
  - Add new products with multi-image upload support (powered by Multer).
  - Update product details and descriptions.
  - Delete existing products with automatic static cleanup.
- **🔐 User Authentication**: User registration and secure login validation.
- **✉️ Interactive Contact**: Contact form powered by EmailJS.
- **📱 Responsive Design**: Fully responsive layout built with React, Bootstrap 5, and Materialize CSS.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Routing**: React Router DOM (v6)
- **Styling**: Bootstrap 5, React Bootstrap, Materialize CSS
- **HTTP Client**: Axios & Fetch API
- **Icons**: React Icons
- **Email Service**: `@emailjs/browser`

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **File Uploads**: Multer
- **Middleware**: CORS, Body-Parser, Dotenv

---

## 📁 Architecture & Folder Structure

```text
Introduction to new Product Web Project/
├── BACKEND/
│   ├── models/            # Mongoose schemas (product.js, user.js)
│   ├── routes/            # Express REST route handlers (products.js, users.js)
│   ├── uploads/           # Static uploaded product images
│   ├── .env.example       # Template for environment configuration
│   ├── package.json       # Backend dependencies and scripts
│   └── server.js          # Express server entry point & DB connection
│
├── frontend/
│   ├── public/            # Static assets and index.html
│   ├── src/
│   │   ├── Components/    # Modular UI components (Dashboard, Auth, Pages)
│   │   ├── assets/        # Visual media assets
│   │   ├── App.js         # Client routing definitions
│   │   └── index.js       # React root DOM rendering
│   └── package.json       # Frontend dependencies and scripts
│
├── .gitignore             # Root git ignore rules
└── README.md              # Project documentation
```

---

## ⚙️ Prerequisites

Before running the application, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [MongoDB](https://www.mongodb.com/) (Local Community Server running on `127.0.0.1:27017` or a MongoDB Atlas URI)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Dhanith-Randula/Introduction-New-Product-Web-Project.git
cd Introduction-New-Product-Web-Project
```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd BACKEND
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file from `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Update `MONGODB_URL` with your local or Atlas MongoDB connection string.
4. Start the backend server:
   ```bash
   npm start
   ```
   *The backend will run on `http://localhost:8070`.*

### 3. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   *The frontend will open automatically at `http://localhost:3000`.*

---

## 🔑 Environment Variables

In `BACKEND/.env`:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Port number for the Express server | `8070` |
| `MONGODB_URL` | MongoDB connection URI | `mongodb://127.0.0.1:27017/Product_db` |

---

## 📡 API Endpoints

### Products (`/product`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/product/` | Retrieve all products |
| `POST` | `/product/add` | Add a new product (supports multipart/form-data images) |
| `GET` | `/product/get/:productname` | Fetch a single product by name |
| `GET` | `/product/get_categories/:categories` | Fetch products by category |
| `GET` | `/product/search?keyword=:query` | Search products by name or category |
| `PUT` | `/product/update/:id` | Update an existing product |
| `DELETE` | `/product/delete/:productid` | Delete a product by ID |
| `GET` | `/uploads/:filename` | Serve uploaded product image |

### Users & Auth (`/user`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/user/add` | Register a new user |
| `POST` | `/user/get/login` | Authenticate user credentials |

---

## 📜 Available Scripts

### In `BACKEND/`:
- `npm start`: Runs the server via `node server.js`
- `npm run dev`: Runs the server with `nodemon` for auto-restart on changes

### In `frontend/`:
- `npm start`: Runs the React app in development mode at `http://localhost:3000`
- `npm run build`: Bundles the production app to `frontend/build`
- `npm test`: Runs interactive test runners

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
