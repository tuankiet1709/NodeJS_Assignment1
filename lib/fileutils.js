const fs = require('fs'),
    fsPromise = fs.promises;

function info(fn) {
    const file = {
        path: fn,
        exists: false,
        read: false,
        write: false,
        isFile: false,
        isDir: false,
        time: 0
    };
    // If the accessibility checks are successful, Promises are resolved with no value
    return Promise.all([
        fsPromise.access(fn, fs.constants.F_OK),
        fsPromise.access(fn, fs.constants.R_OK),
        fsPromise.access(fn, fs.constants.W_OK)
    ])
        .then(fInfo => {
            file.exists = !fInfo[0];
            if (!file.exists) return file;
            else {
                file.read = !fInfo[1];
                file.write = !fInfo[2];
                // Promise is resolved with the fs.Stats object for the given path
                return fsPromise.stat(fn)
                    .then(fStat => {
                        file.isFile = fStat.isFile();
                        file.isDir = fStat.isDirectory();
                        file.time = fStat.mtimeMs;
                        return file;
                    })
                    .catch(() => file);
            }
        })
        .catch(() => file);
}

async function folderUsable(folder) {
    try {
        // fetch folder information
        let fInfo = await info(folder);
        // create folder if required
        if (!fInfo.isDir) {
            await fsPromise.mkdir(folder);
            fInfo = await info(folder);
        }
        // folder accessible?
        return (fInfo.isDir && fInfo.read && fInfo.write ? fInfo : false);
    }
    catch (err) {
        console.log('folderUsable error:', err);
        return false;
    }
}

module.exports = { info, folderUsable}