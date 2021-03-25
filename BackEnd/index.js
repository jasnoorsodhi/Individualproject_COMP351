const cors = require('cors');
const express = require('express');
const app = express();

const { allQuestions, newQuestion, deleteQuestion, allOptions, editQuestion, editOptions} = require("./util")

app.use(express.json());
app.use(cors());
app.get("/questions", allQuestions);
app.post("/question", newQuestion);
app.get("/:id/options", allOptions)
app.put("/:id", editQuestion);
app.put("/options/:id", editOptions);
app.delete("/:id", deleteQuestion);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));