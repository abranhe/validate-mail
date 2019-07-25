/**
 * Check if an email is valid 📧
 * 
 * @param {string} email - the email to validate
 * @returns {boolean} wheather is valid or not
 * 
 * @example
 * ```
 * import validateMail = require('validate-mail');
 * 
 * validateMail('your@email.com');
 * // => true
 * 
 * validateMail('your @email.com');
 * // => false
 * ```
  */
declare function validateMail(input: string): boolean

export = validateMail;
