# 🚗 Click N Drive - Vehicle Sales API

Click N Drive is a RESTful API built with Node.js, Express, and MongoDB. It powers a vehicle sales platform, allowing users to browse, create, and manage vehicle listings and user data.

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB Atlas** with Mongoose
- **dotenv** for environment variable management
- **nodemon** (development)

---

## 🔧 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/a23893/ClickNDriveAPI_New.git
cd click-n-drive-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```bash
touch .env
```

Add the following variables to your `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority
```

> Replace `<username>`, `<password>`, and `<database>` with your MongoDB Atlas credentials.

---

## 🚀 Run the Server

```bash
npm run dev
```

The API will be available at: `http://localhost:3000/`

---

## 📁 Project Structure

```
click-n-drive-api/
├── models/
│   └── User.js         # Mongoose schema for users
├── routes/
│   └── users.js        # Express routes for user operations
├── server.js              # App entry point
├── .env                   # Environment configuration
├── package.json
└── README.md
```

---

## 📱 API Endpoints

### Base URL: `/api/usuarios`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/`      | Get all users     |
| POST   | `/`      | Create a new user |

#### Sample User Payload (POST)

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

---

## 🛠 Future Features

- Vehicle schema and endpoints (`/api/vehicles`)
- User authentication (JWT)
- Admin dashboard
- Image uploads for vehicle listings
- Filtering, sorting, and pagination

---

## 📄 License

MIT

---

## 👨‍💻 Author

Diogo Gomes - https://github.com/a23893 / https://github.com/diogo22gomes

Made with ❤️ by the Click N Drive team.

