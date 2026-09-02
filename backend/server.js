import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello from the backend!'
    });
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});