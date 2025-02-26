for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    if (i === 0 || i === 4 || i === 8) {
      process.stdout.write("\r|   ");
    } else if (i === 1 || i === 5 || i === 9) {
      process.stdout.write("\r/   ");
    } else if (i === 2 || i === 6 || i === 10) {
      process.stdout.write("\r-   ");
    } else {
      process.stdout.write("\r\\   ");
    }
  }, 100 * (i + 1));
}

/*
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to esxapt the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1300);

setTimeout(() => {
  // Need to esxapt the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1700);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1900);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 2100);
*/
