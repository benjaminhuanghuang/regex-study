const versionRegexp = /\d+\.\d+\.\d+/;

const version = versionRegexp.exec(result.stdout)[0];

if (!version) {
    emitError(`Cannot parse git version. (Please, make sure you have git version ${config.gitVersion})`);
    return;
}