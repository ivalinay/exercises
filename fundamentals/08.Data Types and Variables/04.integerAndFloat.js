function integerAndFloat(fisrtNum, secondNum, thirdNum) {
  let sum = fisrtNum + secondNum + thirdNum;

  sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(sum);
}
integerAndFloat(9, 100, 1.1);
