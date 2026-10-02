import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'QuickPrint Core API',
    time: new Date().toISOString()
  });
});

// API Routes
app.use('/api', apiRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 QuickPrint Server running on http://localhost:${PORT}`);
  console.log(`📡 Real-time SSE stream at http://localhost:${PORT}/api/events`);
  console.log(`📁 Uploads served from http://localhost:${PORT}/uploads`);
  console.log(`=========================================`);
});
