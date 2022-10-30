import express from "express";
import cors from "cors";
import ContactRoute from "./routes/ContactRoute.js";
import UserRoute from "./routes/UserRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(ContactRoute);
app.use(UserRoute);

app.listen(5000, () => console.log("Server up and running..."));
