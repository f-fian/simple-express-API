import express from 'express';
import { StudentController } from './controller/student.mjs';
const app = express();

app.get('/', (req, res) => {
    res.send('Choo Choo! Welcome to your Express app 🚅');
})

app.get('/student', StudentController.getAllStudent)
app.get("/json", (req, res) => {
    res.json({"Choo Choo": "Welcome to your Express app 🚅"});
})


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})




