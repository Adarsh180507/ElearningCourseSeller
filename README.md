# 📚 Course Selling Platform

A full-stack e-learning marketplace built on the **MERN stack**, where instructors can create and sell courses, and students can browse, purchase, and securely access content — with integrated payments, cloud media storage, and an analytics dashboard.

## ✨ Features

- 🔐 **Secure authentication** — JWT-based sessions with bcrypt-hashed passwords
- 🛡️ **Role-based access control** — separate student and admin permissions
- 🎓 **Course catalog** — browse, filter, and view detailed course pages
- 💳 **Payments** — checkout and payment verification via Razorpay
- ☁️ **Media uploads** — course thumbnails/videos uploaded via Multer and stored on Cloudinary
- 📊 **Admin dashboard** — manage courses and view sales analytics with Chart.js
- 📧 **Automated emails** — welcome mail, purchase receipts, and OTPs via Nodemailer
- ⏰ **Scheduled jobs** — background tasks (e.g., cleanup, reminders) via node-cron
- 🎨 **Polished UI** — responsive, accessible components with Chakra UI and Framer Motion animations

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React, React Router DOM, Chakra UI, Emotion, Framer Motion, Chart.js / react-chartjs-2, React Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth & Security** | JSON Web Token (JWT), bcrypt, cookie-parser, CORS, validator |
| **Payments** | Razorpay |
| **Media Storage** | Cloudinary, Multer, Datauri |
| **Email** | Nodemailer |
| **Scheduling** | node-cron |
| **Dev Tools** | Nodemon, dotenv |

---

## 🏗️ Project Structure

```
course-selling-platform/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages
│   │   ├── context/         # Global state (auth, etc.)
│   │   └── api/             # API request helpers
│   └── public/
├── controllers/              # Route business logic
├── models/                   # Mongoose schemas (User, Course, Purchase)
├── routes/                   # Express route definitions
├── middlewares/               # Auth, role checks, error handling, Multer config
├── config/                   # DB, Cloudinary, Razorpay setup
├── utils/                    # Helper functions (email, tokens)
├── server.js                 # App entry point
├── .env                      # Environment variables (not committed)
└── package.json
```

*(Adjust this to match your actual folder layout.)*

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or a MongoDB Atlas connection string)
- A [Razorpay](https://razorpay.com/) account (test mode keys are fine for development)
- A [Cloudinary](https://cloudinary.com/) account

### Installation

```bash
# Clone the repository
git clone https://github.com/Adarsh180507/ElearningCourseSeller.git
cd ElearningCourseSeller

# Install dependencies
npm install

# Create your .env file (see Environment Variables below)
cp .env.example .env
```

### Running the App

```bash
# Start the backend (with auto-restart on file changes)
npm run server

# In a separate terminal, start the React frontend
npm start
```

```bash
# Build the frontend for production
npm run build
```

By default the frontend runs on `http://localhost:3000` and the API on whichever port you configure (see below).

---

## 🔐 Environment Variables

Create a `.env` file in the project root with the following (update with your actual keys):

```env
# Server
PORT=5000
FRONTEND_URL=http://localhost:3000

# Database
MONGO_URI=your_mongodb_connection_string

# Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email (Nodemailer)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```


## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Starts the React frontend (via react-scripts) |
| `npm run server` | Starts the backend with Nodemon (auto-restarts on changes) |
| `npm run build` | Builds the frontend for production |


## 🗺️ Roadmap

- [ ] Course ratings and reviews
- [ ] Coupon / discount code support
- [ ] Progress tracking per lecture
- [ ] Certificate generation on course completion
- [ ] Instructor payout dashboard

## 🧑‍💻 Author

**Adarsh Vijayvargiya**
