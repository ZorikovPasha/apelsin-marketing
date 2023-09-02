require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandle = require("./middleware/error-handling")

const dataRouter = require('./routes/dataRouter');
const requestRouter= require("./routes/requestRouter")

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(cors({
  origin:'https://poetic-sunflower-351d96.netlify.app/', 
  optionSuccessStatus:200,
}));
app.use(express.json());

app.use('/api', dataRouter);
app.use("/request", requestRouter)

app.use(errorHandle)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, 
      () => console.log('connected to database')
    )

    app.listen(PORT, () => {
      console.log('server has been started on port ' + PORT);
    });

  } catch(e) {
    console.log(e);
  }
};
start();
