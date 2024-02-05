# Health Care Project

## Overview

Health Care is a full-stack application designed to manage medical tasks, user accounts, and health information. The frontend is built with React, and the backend is developed using Node.js and Express. The communication between frontend and backend is facilitated by CORS.

### Technologies Used

- **Frontend:**
  - React
  - Axios 
  - react-hot-toast

- **Backend:**
  - Node.js
  - Express
  - MongoDB 
  - CORS (for enabling cross-origin resource sharing)
  - CRON (for Upading The Schedule Daliy at MidNight)

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (or another database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/health_care.git
Install dependencies for the frontend and backend:

bash
Copy code
# Navigate to the frontend folder
cd frontend
npm install

# Navigate to the backend folder
cd ../backend
npm install
Configuration
Create a .env file in the backend folder and configure the MongoDB connection:

env
Copy code
MONGO_URI=your_mongodb_connection_string
Running the Application
Start the backend server:

bash
Copy code
# Navigate to the backend folder
cd backend
npm start
Start the frontend application:

bash
Copy code
# Navigate to the frontend folder
cd ../frontend
npm start
Open your browser and go to http://localhost:3000 to access the application.

API Endpoints
User Authentication

Signup:
POST /users/register: Creates a new user account.

Login:
POST /users/login: Authenticates the user and generates a JWT token.


Medical Tasks


Create Task:
POST /tasks/new: Creates a new medical Schedule for the user.
Get Tasks:/tasks/my For Geting all The Schedule 


Update Task:
PUT /tasks/:taskId: Updates an existing medical task.


Delete Task
DELETE /api/tasks/:taskId: Deletes a medical task.
Health Information


Get Health Information:
POST /info/health: Retrieves health information for the authenticated user, including heart rate, blood pressure, sugar level, etc.
