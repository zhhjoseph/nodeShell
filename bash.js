//Output a prompt

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line

// process.stdin.on( 'data', (data) => {
//   const cmd = data.toString().trim(); //remove the newline


//     if(cmd === 'pwd'){
//       process.stdout.write(`Current directory: ${process.cwd()}`)
//     } else {
//       process.stdout.write('You typed: ' + cmd);
//     }
//     process.stdout.write('\nprompt > ')
// })
const ls = require('./ls')
const pwd = require('./pwd')

pwd()
ls()
