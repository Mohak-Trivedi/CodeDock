import express from "express";
import { PORT } from "./config/serverConfig.js";
import cors from "cors";

const app = express();

// to parse request body
app.use(express.json());
app.use(express.urlencoded());

// handle CORS
app.use(cors());

app.get('/ping', (req, res) => {
  return res.json({message: 'pong'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});