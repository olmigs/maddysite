module.exports = {
    saveAsHtml: function (fileName, html) {
        var fs = require('fs');
        fs.writeFile(fileName, html, (err) => {
            if (err) throw err;
            console.log('The file %s has been saved!', fileName);
        });
    },
    copyFiles: function (files) {
        var fs = require('fs');
        for (file in files) {
            fs.copyFile(file.src, file.dest);
        }
    }
}