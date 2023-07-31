import express, { Application } from "express";

const app: Application = express();
app.use(express.json());

const PORT: number = 3000;
const runningMessage: string = `Server is running on http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(runningMessage); 
});