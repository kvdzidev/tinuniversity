function trojkaPitagorejska(a, b, c) {
  const [x, y, z] = [a, b, c].sort((m, n) => m - n);
  return x*x + y*y === z*z;
}

console.log(trojkaPitagorejska(4, 4, 5));
