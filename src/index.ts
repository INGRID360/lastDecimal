export function lastdecimal(value: number, bool: boolean) {
  // Vars
  let container: string;
  let sum: number;
  let decimal: string;

  // Check so value exist else return.
  if (value == null) {
    return;
  }
  container = value.toString();
  const numDec = container.split('.')[1].length;
  // If true
  if (bool === true) {
    sum = value - Math.pow(10, -numDec);
  } else {
    sum = value + Math.pow(10, -numDec);
  }
  decimal = sum.toFixed(numDec);

  // Return our new value
  return decimal;
}
