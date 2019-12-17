module.exports = {
    saveAsHtml: function (fileName, html, fs) {
        fs.writeFile(fileName, html, (err) => {
            if (err) throw err;
            console.log('The file %s has been saved!', fileName);
        });
    }
}