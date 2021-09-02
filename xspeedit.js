const xspeedit = function (input) {
  let arrayItems = [];
  const capacity = [10];

  for (let i = 0; i < input.length; i++) {
    arrayItems.push(parseInt(input.charAt(i)));
  }
  arrayItems.sort().reverse();

  let boxes = [];
  for (let i = 0; i < arrayItems.length; i++) {
    boxes.push(capacity);
  }

  let collection = new Map();
  arrayItems.forEach(function (a) {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] - a >= 0) {
        boxes[i] -= a;
        if (collection.has(i)) {
          let box = [];
          box.push(collection.get(i));
          box.push(a);
          collection.set(i, box);
        } else {
          collection.set(i, a);
        }
        break;
      }
    }
  });

  let ouput = "";
  for (let [k, v] of collection) {
    ouput += v + "/";
  }
  return ouput.substring(0, ouput.length - 1).replace(/,/g, "");
};

module.exports = { xspeedit };
