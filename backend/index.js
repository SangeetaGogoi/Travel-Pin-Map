const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")
const cors = require('cors');

dotenv.config();

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => console.log(err))

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(5000, () => {
  console.log("Backened server is running")
})