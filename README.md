# My Books App

A MERN-stack app for keeping track of your books. Sign up, add books to your list, and update or delete any book you've added — with a details page for each one.

**Live demo:** https://my-books-app-bw2v.onrender.com — sign up for an account to try it. Hosted on Render's free tier, so the first load can take a minute to wake up.

## Screenshot

![My Books App screenshot](https://imgur.com/X7wypDp.png)

## Technologies Used

MongoDB / Mongoose, Express.js, React, Node.js, JSON Web Tokens (JWT), bcrypt

## Features

- Sign up and log in (JWT auth)
- Add a book to your reading list
- Edit and delete books you've added
- View details for each book

## Getting Started (run it locally)

Requires Node 16 and a MongoDB database — the free tier at [MongoDB Atlas](https://www.mongodb.com/atlas) works, or run MongoDB locally.

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with your MongoDB connection string and a JWT secret (any random string):

   ```
   DATABASE_URL=<your MongoDB connection string>
   SECRET=<any random string>
   ```

3. Build the React frontend:

   ```bash
   npm run build
   ```

4. Start the server:

   ```bash
   node server.js
   ```

   The app runs on port 3001 (or `$PORT`).

For development, run the API with `npm run server` and the React dev server with `npm start` (port 3000, proxied to the API on port 3001).

## Planning

Trello board with the project's planning: https://trello.com/b/lYPH392k/project-4-mern-stack

## Next Steps

- Add to cart and checkout functionality
