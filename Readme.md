# Video Backend

A RESTful backend for a video-hosting platform (YouTube-style), built with Node.js, Express, and MongoDB. It supports user authentication, profile management, and channel/subscription data — designed as the foundation for a full video-sharing application.

## Features

- **User Authentication** — JWT-based access and refresh tokens, with secure password hashing via bcrypt
- **User Registration & Login** — Register with avatar/cover image upload, login via username or email
- **Profile Management** — Update account details, change password, update avatar and cover image
- **Channel Profiles** — Aggregated channel data including subscriber counts and subscription status
- **Watch History** — Track and retrieve a user's video watch history with populated video/owner details
- **File Uploads** — Local upload handling via Multer, with persistent storage on Cloudinary
- **Secure Cookies** — HTTP-only cookies for access and refresh tokens

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js 5 |
| Database | MongoDB with Mongoose |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| File Storage | Cloudinary |
| File Uploads | Multer |
| Utilities | mongoose-aggregate-paginate-v2, cookie-parser, cors |

## Project Structure

```
src/
├── controllers/       # Request handlers (business logic)
│   └── user.controller.js
├── db/                # Database connection setup
│   └── index.js
├── middlewares/       # Auth (JWT) and file upload (Multer) middleware
│   ├── auth.middleware.js
│   └── multer.middleware.js
├── models/            # Mongoose schemas
│   ├── user.model.js
│   ├── video.model.js
│   ├── comment.model.js
│   ├── like.model.js
│   ├── playlist.model.js
│   ├── subscription.model.js
│   └── tweet.model.js
├── routes/            # API route definitions
│   └── user.routes.js
├── utils/             # Shared helpers (ApiError, ApiResponse, asyncHandler, Cloudinary upload)
├── app.js             # Express app configuration
├── constants.js        # App-wide constants
└── index.js           # Entry point — DB connection + server bootstrap
```

## Data Models

- **User** — username, email, full name, avatar, cover image, watch history, hashed password, refresh token
- **Video** — video file, thumbnail, title, description, duration, views, publish status, owner
- **Subscription** — subscriber/channel relationship for tracking who follows whom
- **Comment**, **Like**, **Playlist**, **Tweet** — supporting models for future feature expansion

## API Endpoints

All routes are prefixed with `/api/v1/users`.

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/register` | Register a new user (with avatar + optional cover image) | No |
| POST | `/login` | Log in with username/email and password | No |
| POST | `/logout` | Log out and clear tokens | Yes |
| POST | `/refresh-token` | Refresh the access token | No |
| POST | `/change-password` | Change current password | Yes |
| GET | `/current-user` | Get the logged-in user's details | Yes |
| PATCH | `/update-account` | Update account details | Yes |
| PATCH | `/avatar` | Update avatar image | Yes |
| PATCH | `/cover-image` | Update cover image | Yes |
| GET | `/c/:username` | Get a channel's public profile and subscriber stats | Yes |
| GET | `/history` | Get the user's watch history | Yes |

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB instance (local or Atlas)
- A Cloudinary account (for media storage)

### Installation

```bash
cd video-backend
npm install
```
### Run the Server

```bash
npm run dev
```

The server will start on `http://localhost:8000` (or your configured `PORT`).

## Author

**Mudasir Ahmad**  // @anbelin
