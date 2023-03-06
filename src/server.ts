import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
// import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
// app.use(router);

app.get('/ola', (req, res) => {
    res.send('olaaaa')
})

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(process.env.PORT || 80, () => console.log('Server online.'))

module.exports = app;