function lastdecimal(value: number, bool: boolean) {
  let container: string;
  let sum: number;
  let decimal: string;

  container = value.toString();
  const numDec = container.split('.')[1].length;
  // If true
  if (bool === true) {
    sum = value - Math.pow(10, -numDec);
  } else {
    sum = value + Math.pow(10, -numDec);
  }
  decimal = sum.toFixed(numDec);

  return decimal;
}

export { lastdecimal };

// `Hello ${value}`;
