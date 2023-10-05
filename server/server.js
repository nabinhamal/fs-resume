const express = require('express');
const cors = require("cors")

const dotenv = require('dotenv');
const connectDB = require("./config/db")
dotenv.config();



const app = express();

//middelwares
app.use(cors());
app.use(express.json());
//database
connectDB();

//routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
    
    );
  });

  // Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})