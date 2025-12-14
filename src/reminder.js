/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * @param {string} message - The reminder message
 * @param {number} delay - Delay in milliseconds
 * @returns {Promise<void>} - Resolves once the message is logged
 */
function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(); // Resolve the promise after logging
    }, delay);
  });
}




module.exports = { delayedReminder };