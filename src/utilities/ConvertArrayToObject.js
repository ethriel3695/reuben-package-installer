export function convertArrayToObject (userArray) {
  const packageObject = Object.assign(...userArray.map(splitStringsOnColon));
  return packageObject;
}

const splitStringsOnColon = (stringPair) => {
  const splitValues = stringPair.split(': ');
  if (splitValues[0] === undefined || splitValues[1] === undefined || splitValues.length > 2) {
    return false;
  } else {
    return {
      [splitValues[0].trim()]: splitValues[1].trim()
    };
  }
};
