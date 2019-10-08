module.exports = function multiply(first, second) {
  let arr1 = first.split('').reverse();
  let arr2 = second.split('').reverse();
  let arr3 = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let c = arr1[i] * arr2[j];
      (arr3[i + j]) ? (arr3[i + j] = arr3[i + j] + c) : (arr3[i + j] = c);
      }
    }
     for (var i = 0; i < arr3.length; i++) {
      var a = arr3[i] % 10;
      var b = Math.floor(arr3[i] / 10);
      arr3[i] = a;
  
      if (arr3[i + 1]) arr3[i + 1] = arr3[i + 1] + b;
      else if (b != 0) arr3[i + 1] = b;
    }
    let preRes = arr3.reverse().join('');
    let res;
    (preRes.charAt(0) == 0) ? (res = preRes.replace(/0+/, '')) : (res = preRes);
    return (res == '') ? '0' : res;
}
