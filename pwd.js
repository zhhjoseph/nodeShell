module.exports = function(){process.stdin.on( 'data', (data) => {
  const cmd = data.toString().trim(); //remove the newline


    if(cmd === 'pwd'){
      process.stdout.write(`Current directory: ${process.cwd()}`)
    } else {
      process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ')
})
}
