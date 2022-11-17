const { v4: uuidv4 } = require("uuid");

function uniqueId() {
  return uuidv4();
}

module.exports = uniqueId;
