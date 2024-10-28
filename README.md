# Digigo - Personalized E-commerce Platform

**Digigo** is a comprehensive, full-stack e-commerce platform designed to provide personalized shopping experiences through collaborative filtering-based product recommendations. Built with **React** on the frontend and **Node.js** with **TypeScript** on the backend, Digigo leverages **MongoDB** to efficiently store and retrieve data for user interactions, product management, and recommendations.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration & Profiles**: Secure user registration and profile management.
- **Product Catalog**: Browse products by category with a search functionality.
- **User Activity Tracking**: Tracks views, likes, and purchase history for analytics and recommendations.
- **Recommendation Engine**: Collaborative filtering engine to provide personalized product suggestions.
- **RESTful API**: Manages user authentication, product catalog, and recommendation requests.

## Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Additional Tools**: Redis (optional for caching), Jest (testing)

## Repository Structure

- **/digigo**: Frontend application (React)
- **/digigo-server**: Backend application (Node.js)

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (>= v14.x)
- [MongoDB](https://www.mongodb.com/) (running locally or using MongoDB Atlas)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd digigo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
4. Access the frontend at `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd digigo-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see [Environment Variables](#environment-variables)).
4. Start the server:
   ```bash
   npm start
   ```
5. Access the backend API at `http://localhost:5000`.

---

## Environment Variables

Create a `.env` file in the root of **/digigo-server** with the following keys:

```plaintext
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
PORT=5000
```

(Optional) Set up **Redis** for caching recommendations and frequently accessed data.

---

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - User login

### Product Management
- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get a single product
- **POST** `/api/products` - Create a new product (admin)
- **PUT** `/api/products/:id` - Update a product (admin)
- **DELETE** `/api/products/:id` - Delete a product (admin)

### Recommendation
- **GET** `/api/recommendations` - Get personalized recommendations for a user

---

## Contributing

We welcome contributions to **Digigo**! To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--- 
