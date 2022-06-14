import express from 'express';
import multer from 'multer';
import router from "./routes/router.js";

const app = express();

app.use(express.static('public'));
app.use(multer({dest: 'uploads'}).single('file'));

app.use('/api', router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(3500, () => {
    console.log('server started');
});

