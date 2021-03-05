module.exports= function() {
  process.stdin.on('data', (data) => {
    const pwd = data.toString().trim();
    process.stdout.write(`Current directory: ${process.cwd()}`)
    process.stdout.write('\nprompt > ');
  })
}
