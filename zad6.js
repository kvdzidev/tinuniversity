function choinkaNoca(n) {
  let width = 2 * n - 1;
  
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(width));
    } else {
      let stars = n - i;
      let spaces = width - 2 * stars;
      console.log("*".repeat(stars) + " ".repeat(spaces) + "*".repeat(stars));
    }
  }
}

choinkaNoca(12);
