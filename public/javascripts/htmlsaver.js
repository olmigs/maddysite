module.exports = {
    saveAsHtml: function (fileName, html) {
        var fs = require('fs');
        fs.writeFile(fileName, html, (err) => {
            if (err) throw err;
            console.log('The file %s has been saved!', fileName);
        });
    },
    copyFiles: function () {
        var dir = process.cwd();
        var fs = require('fs');
        var files = require(dir + '/public/src/filesToCopy.json');
        var arr = files.toCopy;
        for (let i = 0; i < arr.length; i++) {
            fs.copyFile(dir + arr[i]["src"], dir + arr[i]["dest"], (err) => {
                if (err) throw err;
                console.log('The file was saved to path: %s.', arr[i]["dest"]);
            });
        }
    }
}