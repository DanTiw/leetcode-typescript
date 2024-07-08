/**
 * Determines if a given string of parentheses is valid. A valid parentheses string requires that every opening parenthesis
 * has a corresponding closing parenthesis in the correct order. The function supports parentheses (), brackets [], and braces {}.
 *
 * @param {string} s - The string containing the parentheses, brackets, and braces to be validated.
 * @returns {boolean} - Returns `true` if the string is valid, meaning every opening symbol has a corresponding closing symbol
 *                      in the correct order. Returns `false` if the string is invalid.
 */
function isValid(s: string): boolean {
  // Mapping of closing brackets to their corresponding opening brackets for easy lookup
  const brackets: {[key: string]: string} = { ']': '[', '}': '{', ')': '(' }
  // A Set containing all the closing brackets for quick checks
  const closingBrackets = new Set(Object.keys(brackets))
  // A stack to keep track of opening brackets
  const stack: string[] = []

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    // If the current character is a closing bracket
    if (closingBrackets.has(char)) {
      // Pop the top element from the stack (if it exists) and check if it matches the current closing bracket's corresponding opening bracket
      if (stack.pop() !== brackets[char]) {
        // If it doesn't match, the string is invalid
        return false
      }
    } else {
      // If the current character is an opening bracket, push it onto the stack
      stack.push(char)
    }
  }

  // If the stack is empty, all opening brackets were properly closed; otherwise, the string is invalid
  return stack.length === 0
}