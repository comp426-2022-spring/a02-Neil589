/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */
function coinFlip() {
  return Math.random() < 0.5 ? 'heads' : 'tails'
}
// console.log(coinFlip());

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  if (!(flips>0)){flips = 1};
  const result = [];
  for (let i=0;i<flips;i++){
    result.push(Math.random() < 0.5 ? 'heads' : 'tails')
  }
  return result;
}
/*console.log(coinFlips(5));
console.log(coinFlips(2))
console.log(coinFlips(0))
console.log(coinFlips(11))
*/

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  const result = {tails: 0, heads: 0}; 
  array.forEach(element => {
    if (element === "heads"){
      result.heads++} else if (element === "tails"){
      result.tails++} else {
        return "Error"
      };
  });
  return result;
}
// console.log(countFlips(coinFlips(40)));

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(_call) {
  if (_call !== "heads" && _call !=="tails"){
    console.log("Error: no input. Usage: node guess-flip --call=[heads|tails]")
    return
  }
  const record = {call: _call, flip:"", result:""}
  record.flip = coinFlip();
  record.result = _call === record.flip ? "win" : "lose";
  return record;
}

// console.log(flipACoin('tails'));

/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip, coinFlips, countFlips, flipACoin}