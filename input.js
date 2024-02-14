// setup interface to handle user input from stdin

let connection;

const setupInput = function () {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};


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


};


// Exporting Functions
module.exports = { setupInput };