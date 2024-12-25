# MHub

## Introduction

The **MHub** is a multi-tier platform for influencers and clients to streamline promotional campaigns and gain actionable insights. By leveraging cutting-edge technology, it provides real-time engagement data, seamless communication tools, and an analytics dashboard.

## 🌐 Live Demo

Explore the platform live: [Marketing Hub Live Demo](https://fullstack-marketing-hub.vercel.app/)

---

## ✨ Features

- **Campaign Management**: Simplify collaboration between influencers and clients with intuitive tools.
- **Social Media Integration**: Fetch data directly from Instagram, YouTube, and Twitter APIs.
- **Real-Time Communication**: Built-in chat system using `socket.io`.
- **Analytics Dashboard**: Visualize metrics like views, likes, comments, and performance summaries.

---

## 🛠️ Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud)

### Setup Instructions

The project is divided into three components: **client**, **server**, and **socket**. Each component must be run individually.

---

### 1. **Backend Setup (Server)**
1. Navigate to the `server` directory:
   ```bash
   cd fullstack-marketing-hub/server
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
    ```bash
    node index.js
4. The server will run on http://localhost:5000.
### 2. **Frontend Setup (Client)**
1. Navigate to the `client` directory:
   ```bash
   cd fullstack-marketing-hub/client
2. Install dependencies:
   ```bash
   npm install
3. Start the cilent:
    ```bash
    npm start
4. Open your browser at http://localhost:3000.

### 3. **Socket Server Setup**
1. Navigate to the `socket` directory:
   ```bash
   cd fullstack-marketing-hub/socket
2. Install dependencies:
   ```bash
   npm install
3. Start the WebSocket server:
    ```bash
    node index.js
4. The WebSocket server will run on http://localhost:4000.

---

### Complete Setup:
Run all three components (**server**, **client**, and **socket**) simultaneously in separate terminal windows.

Access the platform at:  
`http://localhost:3000`

---

## 📊 Features in Action

- **Engagement Tracking**: Real-time metrics for likes, comments, and shares.
- **Campaign Insights**: Detailed analytics across Instagram, YouTube, and Twitter.
- **Seamless Collaboration**: Integrated chat for instant communication.

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard Overview](client/src/Assets/Screenshot%202024-09-13%20021736.png)

### Campaign Details
![Campaign Details](client/src/Assets/Screenshot%202024-09-13%20021139.png)

### Chat Application
![Chat Application](client/src/Assets/Screenshot%202024-09-13%20021202.png)

### Analytics Visualization
![Analytics Visualization](client/src/Assets/Screenshot%202024-09-13%20021211.png)

## 🚀 Wrapping Up

With **Marketing Hub**, you now have a streamlined platform to manage campaigns, track performance metrics, and collaborate seamlessly. Start your journey towards smarter marketing today!
