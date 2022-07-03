const express = require('express');

const userRouter = require('./routes/userRoute');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/user', userRouter)

app.listen(PORT, console.log(`executando na porta ${PORT}`));
