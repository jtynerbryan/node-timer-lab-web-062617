const time = process.argv[2]

function countdown(time) {
  let counter;
  time.includes("min") ? counter = parseInt(time.split("min")[0], 10) * 60 : counter = parseInt(time.split("s")[0], 10)
  while (counter > 0) {
    setTimeout(console.log(`Left: ${counter -= 1}s`),1000)
  }
}

countdown(time)
done()
