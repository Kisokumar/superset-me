const server = require("./src/server/server");

port = 3001;

server.listen(port, () => {
  console.log(`  -  Backend Express API listening on ${port}`);
});
