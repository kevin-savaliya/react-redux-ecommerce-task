```md
# React Redux E-Commerce Task

This project is developed as part of a practical assignment.  
It is a simple e-commerce application built using React and Redux Toolkit.

---

## Overview

The application allows a user to log in, view products, add products to a cart, and proceed to checkout.  
All data is fetched from DummyJSON public APIs.

---

## Implemented Features

- User login using DummyJSON authentication API  
- JWT token handling after successful login  
- Protected routes for authenticated users  
- Product listing fetched from DummyJSON products API  
- Add to Cart functionality using Redux  
- Cart item count displayed in the navigation bar  
- Checkout page showing cart items and total price  

---

## Technologies Used

- React  
- Redux Toolkit  
- React Router DOM  
- Axios  
- CSS  

---

## Authentication

Authentication is implemented using the DummyJSON Auth API.

API reference:  
https://dummyjson.com/docs/auth

Test credentials used:

Username: kminchelle
Password: 0lelplR

After successful login, the JWT token is stored in localStorage and used to manage protected routes.

---

## Products

Products are fetched from the DummyJSON Products API.

API reference:  
https://dummyjson.com/docs/products

Products are displayed in a user-friendly layout, and users can add items to the cart.

---

## Cart and Checkout

- Cart state is managed using Redux Toolkit  
- Cart item count updates dynamically in the navbar  
- Checkout page displays all added products and calculates the total price  
- Users can remove items or place an order, which clears the cart  

---

## Project Structure

src/
├── api/
├── components/
├── features/
│   ├── auth/
│   ├── products/
│   └── cart/
├── pages/
├── store.js
├── App.js
└── index.js

---

## How to Run the Project

1. Install dependencies  

npm install


2. Start the application  

npm start


3. Open in browser  

[http://localhost:3000](http://localhost:3000)


---

## Notes

The focus of this project is correct functionality, clean Redux state management, and a clear project structure.  
The application can be extended further with additional features and UI improvements.

---
