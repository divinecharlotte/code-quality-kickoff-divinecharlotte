/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {

  
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if(password === "null") return 0
  
 let newPassword = password.match(/(.)\1+/gm)

 if(!newPassword ) return 0

  return newPassword.reduce((count, curr) => count + (curr.length > 2 ? 2 : 1), 0)
}
