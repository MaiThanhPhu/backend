const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

// Cấu hình CORS
app.use(cors({
    origin: ['http://localhost:5173', 'https://frontend-jade-nine-53.vercel.app/'],
    credentials: true
}));

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API đang chạy...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server chạy trên cổng ${PORT}`);
});