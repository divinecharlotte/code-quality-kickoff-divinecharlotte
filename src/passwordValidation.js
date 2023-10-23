export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if (forbiddenPasswords.includes(password)) return false
  
  if (password.length !== 10) return false
  //regex to check if password is made up of  numbers only
  if (password.match(/^[1-9]+$/)) return false
  //regex to check if password is made up of  characters only
  if (password.match(/^[a-z]+$/gi)) return false
    //regex to check if password has a @ special characters
  if (password.match(/[!@]/gi))  return false
    //regex to check if password contains lower and upper case characters 
  if (!(/(?=.*[A-Z])(?=.*[a-b])[A-Za-z]+/g).test(password))  return false
  
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
