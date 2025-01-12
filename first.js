import express from 'express';

const app = express();

app.get ('/healthy', (req, res) => {
    res.send ('healthy users!')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server listening on the port ${PORT}`));