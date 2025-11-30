function poleProstokata(a, b) { return a * b; }
function poleTrojkata(a, h) { return (a * h) / 2; }
function poleRownolegloboku(a, h) { return a * h; }
function poleTrapezu(a, b, h) { return ((a + b) * h) / 2; }

function poleFigury(figura, ...wymiary) {
  switch(figura) {
    case "prostokąt": 
    return poleProstokata(...wymiary);
    case "trójkąt": 
    return poleTrojkata(...wymiary);
    case "równoległobok": 
    return poleRownolegloboku(...wymiary);
    case "trapez": 
    return poleTrapezu(...wymiary);
    default: 
    return "Nieznana figura";
  }
}

console.log(poleFigury("prostokąt", 4, 5));
console.log(poleFigury("trójkąt", 3, 6));
console.log(poleFigury("równoległobok", 5, 2));
console.log(poleFigury("trapez", 3, 5, 4));
