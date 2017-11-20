export function arrayOfStringsFormatter (userInput) {
  let userArray = [];
  const isObject = Object.keys(userInput).length > 0 && userInput.constructor !== Object;

  if (!isObject) {
    return false;
  }

  if (userInput !== undefined) {
    userInput = userInput.replace(/"\[/g, '');
    userInput = userInput.replace(/\]"/g, '');

    userArray = userInput.split(',');

    return userArray;
  } else {
    return false;
  }
}
