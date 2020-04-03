const mongoose = require("mongoose");

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect("mongodb+srv://kapxyale:alex45eivier@herramientas-tdenp.mongodb.net/test?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(db => console.log("Database is connected"))
  .catch(err => console.log(err));