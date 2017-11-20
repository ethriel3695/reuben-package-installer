export function orderPackagesForInstallation (packageObject) {
  let packageName = '';
  let packageDependency = '';
  let parentPackageName = '';
  let dependencyPackageName = '';
  let dependencyName = '';

  let orderedArray = [];

  /* eslint-disable no-console */

  for (packageName in packageObject) {
    console.log(packageObject);
    orderedArray.push(packageName);
    orderedArray.sort();
    console.log(orderedArray);
    // console.log(packageObject);
    // dependencyName = packageObject[packageName];
    // if (packageObject[packageName] === '') {
    //   orderedArray.push(packageName);
    // }
    // if (packageObject.hasOwnProperty(dependencyName)) {
    //   dependencyPackageName = packageObject[dependencyName];
    //   orderedArray.push(dependencyPackageName);
    // }
  }

  // for (packageName in packageObject) {
  //   if (packageObject[packageName] === '') {
  //     orderedArray.push(packageName);
  //   }
  //   for (packageDependency in packageObject) {
  //     if (packageObject[packageDependency] === packageName) {
  //       if (packageObject[packageDependency] === '') {
  //         orderedArray.push(packageName);
  //       }
  //       orderedArray.push(packageDependency);
  //     }
  //   }
  // }
  return orderedArray;
}
