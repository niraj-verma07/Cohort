// Server start Karna
// Database se connect Karna
const app = require("./src/app");
const mongoose = require("mongoose");

// Database se connect karana
function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://vermaniraj9607_db_user:ctWg41Xwxqo4XUCm@cluster0.e5a70yo.mongodb.net/Notes-API",
    )
    .then(() => {
      console.log("Connected to DB");
    });
}

connectToDb();
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
