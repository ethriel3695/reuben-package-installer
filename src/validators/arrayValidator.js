export const arrayOfStringsValidation = (userInput) => {
  const isArray = Array.isArray(userInput);
  return isArray === true ? isArray : false;
};
