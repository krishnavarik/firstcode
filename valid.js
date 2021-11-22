function ispar(x) {
  const pair = {
    "{": "}",

    "(": ")",

    "[": "]"
  };

  let stk = [];

  let arr = x.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    let br = arr[i];

    if (pair[br]) {
      stk.push(br);
    } else {
      let chkbr = stk.pop();

      if (pair[chkbr] != br) {
        return false;
      }
    }
  }

  if (stk.length > 0) {
    return false;
  }

  return true;
}

let x = "{}";

console.log(ispar(x));
