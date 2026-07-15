const express = require("express");
const cors = require("cors");

const recommendRoute = require("./routes/recommend");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recommend", recommendRoute);

app.listen(5001, () => {
  console.log("Server running on port 5001");
});