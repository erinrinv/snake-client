const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.21.184.110', // IP address here,
    port:50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server" );
    conn.write('Name: EVG');
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};