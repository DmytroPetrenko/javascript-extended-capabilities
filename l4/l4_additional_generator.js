let nums = {
  *getRange(start, end) {
    while (start <= end) {
      if (start == 49) {
        throw new Error('Hate ur 49 number');
      } else {
        yield start;
        start++;
      }
    }
  },
};

let simples = new Array();

for (const current of nums.getRange(1, 50)) {
  //   if (current == 49) {
  //     let error = new Error("Hate ur 49 number");
  //     console.log(error);
  //     break;
  //   }
  let flag = true;

  if (current == 1 || current == 2) {
    simples.push(current);
    console.log(current + "s");
  } else {
    for (let i = 1; i < simples.length; i++) {
      const element = simples[i];
      if (current % element == 0) {
        flag = false;
      }
    }

    if (flag === true) {
      simples.push(current);
      console.log(current + "s");
    }
  }

  if (current % 2 == 0) {
    console.log(current + "even");
  } else {
    console.log(current + "odd");
  }
}
