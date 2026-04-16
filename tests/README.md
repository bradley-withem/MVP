# Tee Time Booking API

## Project Description
This is a REST API for a golf tee time booking system. It allows users to view golf courses, browse available tee times, and create bookings. The system is built using Node.js, Express, Sequelize, and SQLite.

---

## Tech Stack
- Node.js
- Express
- Sequelize
- SQLite
- Jest (testing)

---

## Setup Instructions

1. Install dependencies:
npm install

2. Seed the database:
npm run seed

3. Start the server:
npm run dev

Server runs on:
http://localhost:3000

---

## Models

### User
- id
- name
- email
- phone

### GolfCourse
- id
- name
- city
- state
- holes
- par
- rating

### TeeTime
- id
- courseId
- date
- time
- maxPlayers
- availableSlots
- price

### Booking
- id
- userId
- teeTimeId
- numberOfPlayers
- totalPrice
- status

---

## Relationships

- A GolfCourse has many TeeTimes
- A TeeTime belongs to a GolfCourse
- A User has many Bookings
- A Booking belongs to a User
- A Booking belongs to a TeeTime

---

## API Endpoints

### Users
GET /users  
GET /users/:id  
POST /users  
PUT /users/:id  
DELETE /users/:id  

### Courses
GET /courses  
GET /courses/:id  
POST /courses  
PUT /courses/:id  
DELETE /courses/:id  

### Tee Times
GET /teetimes  
GET /teetimes/:id  
POST /teetimes  
PUT /teetimes/:id  
DELETE /teetimes/:id  

### Bookings
GET /bookings  
GET /bookings/:id  
POST /bookings  
PUT /bookings/:id  
DELETE /bookings/:id  

---

## Example Request

### Create a User

POST /users

Request Body:
{
  "name": "John Doe",
  "email": "john@test.com",
  "phone": "555-1234"
}

---

## Testing

Run tests with:
npm test

This project uses Jest and Supertest to test API routes.

---

## 
This is an MVP version of the project. Authentication (JWT) and authorization are not included yet and will be added in future versions.

