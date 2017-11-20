export function orderPackagesForInstallation (packageObject) {
  let packageName = '';
  let dependencyName = '';
  let orderedArray = [];
  let filteredOrderedArray = [];

  let packageArray = Object.keys(packageObject);
  let dependencyArray = Object.keys(packageObject).map(function (dependency) {
    return packageObject[dependency];
  });

  for (packageName in packageObject) {
    dependencyName = packageObject[packageName];
    if (dependencyArray.includes(packageName)) {
      if (dependencyName === '') {
        orderedArray.push(packageName);
        keysByValue(packageName);
      }
    } else if (packageArray.includes(packageName)) {
      if (orderedArray.includes(dependencyName)) {
        orderedArray.push(packageName);
        keysByValue(packageName);
      }
    }
  }

  function keysByValue (dependency) {
    orderedArray.push(Object.keys(packageObject)
      .find(key => packageObject[key] === dependency));
  }

  function uniqueArrayValues (packages) {
    return packages.filter(function (element, pos, arr) {
      return arr.indexOf(element) === pos;
    });
  }
  orderedArray = orderedArray.filter(function (packages) {
    if (packages !== undefined) {
      return packages.length > 0;
    }
  });
  filteredOrderedArray = uniqueArrayValues(orderedArray);
  return filteredOrderedArray;
}
