# 🚀 Crypto Price Tracker - Setup Guide

This guide explains how to set up and run the **Crypto Price Tracker** on a different computer after cloning it from GitHub.

---

## 📌 1️⃣ Clone the Repository
To use this project on a different computer, first clone the repository:

```sh
git clone https://github.com/ertnbrk/crypto-tracker.git
cd crypto-tracker
```

---

## 📌 2️⃣ Set Up & Run Next.js Web App
1. Navigate to the **Next.js web application**:
   ```sh
   cd web-app
   ```
2. Install the required dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the web app in your browser:  
   **`http://localhost:3000`**

---

## 📌 3️⃣ Set Up & Run Docusaurus Documentation
1. Navigate to the **documentation folder**:
   ```sh
   cd ../docs
   ```
2. Install the required dependencies:
   ```sh
   npm install
   ```
3. Start the documentation server:
   ```sh
   npm run start
   ```
4. Open the documentation in your browser:  
   **`http://localhost:3001`**

---

## 📌 4️⃣ Troubleshooting (Common Issues & Solutions)

### **🔹 Issue: Missing Dependencies**
**Error:** `Module not found`  
**Solution:** Run:
```sh
npm install
```
to install the required packages.

---

### **🔹 Issue: API Data Not Fetching**
**Error:** No data is displayed after running the app.  
**Solution:**  
1. Check your **internet connection**.  
2. Verify that **CoinGecko API is online** by testing this link in your browser:
   ```sh
   https://api.coingecko.com/api/v3/ping
   ```

---

### **🔹 Issue: Port Already in Use**
**Error:** Address already in use (Port 3000 or 3001 is occupied).  
**Solution:** Start the servers on different ports:

```sh
PORT=4000 npm run dev
PORT=4001 npm run start
```
Then open:
- **Web app:** `http://localhost:4000`
- **Docs:** `http://localhost:4001`

---

## 📌 5️⃣ Running the Project in Production Mode
If you want to **run the project in production mode**, use the following commands:

### **Next.js Production Build**
```sh
cd web-app
npm run build
npm start
```
This will start the optimized Next.js application.

### **Docusaurus Production Build**
```sh
cd ../docs
npm run build
npm run serve
```
This will generate the documentation static files and serve them.

---

## 📌 6️⃣ Deployment Instructions

### **Deploying the Next.js App to Vercel**
If you want to **deploy the web app online**, use **Vercel**:
```sh
vercel --prod
```
Or manually deploy using the **Vercel Dashboard**.

---

### **Deploying the Docusaurus Documentation to GitHub Pages**
1. **Build the static documentation**:
   ```sh
   cd docs
   npm run build
   ```
2. **Deploy it to GitHub Pages**:
   ```sh
   npm run serve
   ```
Now, your documentation will be accessible online.

---

## 📌 7️⃣ Project Folder Structure

Ensure your project is structured correctly:

```sh
/crypto-tracker
│
├── /web-app        # Next.js app (Crypto Tracker)
│   ├── /src
│   ├── /pages
│   ├── /utils
│   ├── package.json
│   ├── next.config.js
│   ├── README.md
│
├── /docs           # Docusaurus documentation
│   ├── /docs
│   │   ├── how-to-run.md
│   │   ├── api-details.md
│   │   ├── state-management.md
│   │   ├── challenges.md
│   ├── sidebars.js
│   ├── docusaurus.config.js
│   ├── README.md
│
├── .gitignore
├── README.md
```
