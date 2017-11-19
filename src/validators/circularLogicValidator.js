export function packageIsADependencyOfDependency (packageAndDependencies) {
  let packageName = '';
  let dependencyPackageName = '';
  let dependencyName = '';

  /* eslint-disable no-console */

  for (packageName in packageAndDependencies) {
    dependencyName = packageAndDependencies[packageName];

    if (packageAndDependencies.hasOwnProperty(dependencyName)) {
      dependencyPackageName = packageAndDependencies[dependencyName];
    }

    if (dependencyPackageName === packageName) {
      return true;
    }
  }
  return false;
}
