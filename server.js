const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const path = require('path');
// Controllers
const businessController = require('./Controller/ businessController');

// MiddLEWARE
// to connect public folder

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Conected to MongoDB${mongoose.connection.name}`);
});

app.get('/', (req,res) => {
  res.render('index.ejs');
})


app.use('/businesses',businessController);
app.listen(port), () => {
  console.log("SERVER IS WORKING");
}

