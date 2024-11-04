import express from 'express';
import router from '../routes/routes';

const port = 3001;
const app = express();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`application listening on port ${port}`)
})