# Event_API
Synergia Event Booking API

A small Node.js + Express REST API for managing event bookings (assignment-ready).
Data is stored temporarily in an in-memory array (no database). Implements basic CRUD using HTTP methods: GET, POST, PUT, DELETE.

Features

View all bookings

Register (create) a booking

View a single booking by id

Update booking details

Cancel (delete) a booking

Simple request validation and clear HTTP status codes

Ready-to-run with a single index.js file

Prerequisites

Node.js (v14+ recommended)

npm

Quick start

Create project folder and initialize:

mkdir synergia
cd synergia-event-api
npm init -y
npm install express


Create index.js and paste the API code (the code I gave you earlier).

Start the server:

node index.js


Server will run on http://localhost:3000 by default.
