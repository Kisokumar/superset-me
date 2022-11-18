const server = require("./src/server/server");

port = 3000;

server.listen(port, () => {
  console.log(`App listening on ${port}`);
});
