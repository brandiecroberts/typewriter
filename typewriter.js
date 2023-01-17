const sentence = "hello there from lighthouse labs";
let delay = 50;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay += 1000);
}