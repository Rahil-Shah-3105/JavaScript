const logger = console;
// wiki - https://en.wikipedia.org/wiki/Tower_of_Hanoi
// Recursive Javascript function to solve tower of hanoi

export function TowerOfHanoi(n, from, to, aux, output = []) {
logger.debug(`>>> Entering TowerOfHanoi(n=${n},from=${from},to=${to},aux=${aux},output=${output})`);
  if (n === 1) {
    output.push(`Move disk 1 from rod ${from} to rod ${to}`)
    return output
  }
  TowerOfHanoi(n - 1, from, aux, to, output)
  output.push(`Move disk ${n} from rod ${from} to rod ${to}`)
  TowerOfHanoi(n - 1, aux, to, from, output)
logger.debug(`<<< Exiting TowerOfHanoi(n=${n},from=${from},to=${to},aux=${aux},output=${output})`);
  return output
}

// Driver code (A, C, B are the name of rods)

// const n = 4
// TowerOfHanoi(n, 'A', 'C', 'B')
