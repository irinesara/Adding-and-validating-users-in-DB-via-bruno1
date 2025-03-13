const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./controllers/routes');
const connectDB = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000;
const uri = "mongodb+srv://ruchithata83:ruchitha@signup.9jubx.mongodb.net/?retryWrites=true&w=majority&appName=signup";

connectDB(uri);

app.use('/api', router); 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});