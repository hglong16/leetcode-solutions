/*
 * @Author: hglong16 | intihad.vuong@gmail.com
 * @Date: 2023-06-20 22:27:22
 * @Last Modified by:   hglong16
 * @Last Modified time: 2023-06-20 22:27:22
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  let count = 0;

  if (s.length < 2) {
    return !s.length;
  }

  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
      count++;
    } else if (count === 0) {
      return false;
    } else {
      let last = stack.pop();
      var pair = last + c;
      if (!(pair === "()" || pair === "[]" || pair === "{}")) {
        return false;
      }
      count--;
    }
  }

  return count === 0;
}
//
// Runtime // 58 ms // Beats // 91.70%
// Memory // 45.1 MB // Beats // 35.32%
