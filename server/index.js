const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const route = require("./routes/route.js");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/Youtube";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.use((req, res) => {
  return res
    .status(400)
    .send({ status: false, message: "End point is incorrect" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
