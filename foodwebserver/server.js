const server = require("./index");
const mongoose = require("mongoose");
// listen server
server.listen(8081, () => {
  console.log("server started successfully");
});
// connect mongoose
main().catch((err) => console.log(err));
main().then(() => console.log("DB Connected Successfully"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/food");
}
