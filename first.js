import express from 'express';

const app = express();

app.get ('/healthy', (req, res) => {
    //res.send ('healthy users!');
    res.status(400).json({message:"hello"})     //changing the status code on 400 it will be bad request.
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server listening on the port ${PORT}`));