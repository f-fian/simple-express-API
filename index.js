import express from "express"
var app = express();
import { StudentController } from "./controller/student.mjs";


app.get("/student", StudentController.getAllStudent);
app.get("/", (req, res, next) => {
    res.json(["alfian","alamsyah"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });




