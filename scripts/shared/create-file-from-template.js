const { readFile, writeFile } = require("fs");

function createFileFromTemplate({
    folderPath,
    fileName,
    replaceName,
    ext = "tsx",
    template,
    onReplace,
}) {
    const path = `${folderPath}/${fileName}.${ext}`;


    return new Promise(async (resolve, reject) => {
        readFile(template, "utf8", function (err, data) {
            if (err) {
                return reject(err);
            }
            var result = onReplace
                ? onReplace(data, replaceName)
                : data.replace(/Template/g, replaceName);

            writeFile(path, result, function (err) {
                if (err) {
                    throw err;
                }

                resolve();
            });
        });
    });
}

exports.createFileFromTemplate = createFileFromTemplate;
