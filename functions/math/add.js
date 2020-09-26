let _ = function (array) {
  if (typeof array != Array) throw new Error("Input must be an array.");
  else {
    let sum = 0, acceptedInputs = [ String, Number ];

    for (let i = 0; i < array.length; i++) {
      if (acceptedInputs.includes(typeof i)) {
        try {
          sum += Number(i);
        } catch(e) {
          throw new Error(e);
        }
      } else throw new Error(`${i} is not a Number or String.`);
    }

    return sum;
  }
};

module.exports = _;
