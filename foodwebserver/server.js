const server = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// listen server
server.listen(process.env.PORT, () => {
  console.log("server started successfully");
});
// connect mongoose
main().catch((err) => console.log(err));
main().then(() => console.log("DB Connected Successfully"));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
