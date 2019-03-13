const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys_dev').mongoURI;
const bodyParser = require('body-parser');
const passport = require("passport");
const images = require("./routes/api/upload");
const labels = require("./routes/api/vision");
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// Import routes
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const dbRecipes = require("./routes/api/db_recipes");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello PiCook");
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// routes used
app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/db_recipes", dbRecipes);


app.use("/api/image-upload", images);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));