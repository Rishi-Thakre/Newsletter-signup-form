# Newsletter-signup-form

# 📬 Newsletter Signup Form

A full-stack MERN application that allows users to subscribe to a newsletter using their **name and email**. The form data is saved to a local MongoDB database through a Node.js/Express backend. The frontend is built with React.

> ⚠️ This project uses the native MongoDB Node.js driver — no Mongoose.

---

## 🚀 Tech Stack

**Frontend**:  
- React (with create-react-app)  
- Axios for HTTP requests

**Backend**:  
- Node.js  
- Express  
- MongoDB (via native `mongodb` driver)  
- CORS & dotenv

---

## 📁 Project Structure

Newsletter-signup-form/
├── backend/ # Express backend
│ ├── server.js # Main server file
│ ├── db.js # MongoDB connection
│ └── models/ # Subscriber schema (custom logic)
├── frontend/ # React frontend
│ ├── src/
│ │ ├── App.js
│ │ └── components/
│ │ └── SignupForm.jsx
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## ✨ Features

- 📥 Users can subscribe with name + email
- ✅ Email format validation
- 🔐 Email uniqueness check
- 💾 Data stored in local MongoDB
- 🔍 Development route to list all subscribers

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Rishi-Thakre/Newsletter-signup-form.git
cd Newsletter-signup-form
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
✅ Create a .env file:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/newsletterDB
✅ Start the backend:

bash
Copy
Edit
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
✅ Start the frontend:

bash
Copy
Edit
npm start
Visit:
http://localhost:3000

🧪 Test the API (Optional)
Use Thunder Client / Postman:

bash
Copy
Edit
POST http://localhost:5000/api/subscribe
Content-Type: application/json

{
  "name": "Rishi Thakre",
  "email": "rishi@example.com"
}
📄 Sample Admin Route (DEV only)
To view all subscribers in browser:

bash
Copy
Edit
GET http://localhost:5000/api/all-subscribers
⚠️ This route is for development use only and not secured for production.

📌 Status
✅ Functional
🛠️ Local only — not yet deployed

📬 Future Improvements
Email confirmation / welcome email

Admin dashboard to manage subscribers

Deployment (Netlify + Render)

Styling with Bootstrap/Tailwind

Export to CSV

👨‍💻 Author
Rishi Thakre
🔗 GitHub

📜 License
This project is open-source and free to use under the MIT License.

yaml
Copy
Edit
