import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
    console.log('received: ', req.body)

    res.json({
        message: 'I received your request!'
    })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})
