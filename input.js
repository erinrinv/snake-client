// setup interface to handle user input from stdin

let connection;

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  if(key === MOVE_UP_KEY){
    connnection.write('Move: up');
  }
  if(key === MOVE_LEFT_KEY){
    connnection.write('Move: left');
  }
  if(key === MOVE_DOWN_KEY){
    connnection.write('Move: down');
  }
  if(key === MOVE_RIGHT_KEY){
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