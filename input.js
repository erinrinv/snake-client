// setup interface to handle user input from stdin

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if(key === 'W'){
    connnection.write('Move: up');
  }
  if(key === 'A'){
    connnection.write('Move: left');
  }
  if(key === 'S'){
    connnection.write('Move: down');
  }
  if(key === 'D'){
    connnection.write('Move: right');
  }
  if (key === '1') {
    connection.write('Say: I am snek');
  }
  if (key === '2') {
    connection.write('Say: Oof!');
  }
  if (key === '3') {
    connection.write('Say: GG');
  }


};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};





// Exporting Functions
module.exports = { setupInput };