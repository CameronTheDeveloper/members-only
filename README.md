# Members-Only

## [Application Link](https://snow-false-hornet.glitch.me)

A website where users can post messages after signing up for an account and logging in. Users can upgrade their accounts to premium to view the usernames (authors) of each message.

## Features

- **User Authentication**: Users can sign up and log in to post messages.
- **Premium Membership**: Premium members can see the authors of all messages.
- **Message Posting**: Authenticated users can post messages.
- **Account Management**: Users can manage their accounts and upgrade to premium.
- **Message Deletion**: Premium members can delete messages.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: Database for storing user information and messages.
- **Mongoose**: ODM for MongoDB.
- **Passport**: Authentication middleware for Node.js.
- **Pug**: Template engine for rendering views.
- **Bcrypt.js**: Library for hashing passwords.
- **Express-Session**: Session management middleware.
- **Express-Validator**: Middleware for validating and sanitizing input.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/members-only.git
   cd members-only
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory and add the following variables**:

   ```env
   MONGODB_URI=your_database_url
   SECRET=your_session_secret
   UPGRADE_PASSWORD_1=your_upgrade_password
   ```

4. **Start the application**:

   ```sh
   npm start
   ```

5. **For development, use**:
   ```sh
   npm run devstart
   ```

## Usage

1. **Sign up**: Create a new account.
2. **Log in**: Log in with your account credentials.
3. **Post Messages**: Post messages to the community.
4. **Upgrade to Premium**: Upgrade your account to view the authors of messages.
