const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


app.listen(5000,()=>{
  console.log(`Server Started at ${PORT}`)
});
