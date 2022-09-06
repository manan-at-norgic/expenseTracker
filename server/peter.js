const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.route("/time").get(async (req, res) => {
  try {
    const d = new Date();
    const time = `${d.getHours()}:${d.getMinutes()} I am from Backend`;
    res.json(time);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`server is listening on port: ${port}`);
});
