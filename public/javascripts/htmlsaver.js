module.exports = {
    saveAsHtml: function (fileName, html) {
        var fs = require('fs');
        fs.writeFile(fileName, html, (err) => {
            if (err) throw err;
            console.log('The file %s has been saved!', fileName);
        });
    }
}