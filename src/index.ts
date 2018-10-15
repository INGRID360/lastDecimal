export function lastdecimal(value: number, bool: boolean) {
  // Vars
  let container: string;
  let sum: number;
  let decimal: string;

  // Check so value exist else return.
  container = value.toString();
  const split = container.split('.')[1];
  if (typeof split === 'undefined') {
    decimal = '1.1';
    return decimal;
  }
  const numDec = split.length;
  // If true
  if (bool === true) {
    sum = value + Math.pow(10, -numDec);
  } else {
    sum = value - Math.pow(10, -numDec);
  }
  decimal = sum.toFixed(numDec);

  // Return our new value
  return decimal;
}
