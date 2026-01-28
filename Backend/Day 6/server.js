const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://vermaniraj9607_db_user:ctWg41Xwxqo4XUCm@cluster0.e5a70yo.mongodb.net/Notes-API",
    )
    .then(() => {
      console.log("Database Connected");
    });
}

connectToDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
