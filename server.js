`use strict`;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const MONGO_PORT = process.env.MONGO_PORT;
mongoose.connect(`${MONGO_PORT}/exercise`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const {
  getData,
  createFav,
  getFav,
  updateFav,
  deleteFav
} = require("./controllers/Fav.Controller");

app.get("/data", getData);
app.get("/favs", getFav);
app.post("/create-fav", createFav);
app.put('/update-fav/:id',updateFav)
app.delete('/delete-fav/:id',deleteFav)

app.listen(PORT, () => {
  console.log(`listen to ${PORT}`);
});
