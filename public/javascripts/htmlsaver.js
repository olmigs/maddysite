function saveAsHtml(err, html, fs, fileName) {
    if (err) throw err;
    fs.writeFile(fileName, html, (err) => {
        if (err) throw err;
        console.log('The file %s has been saved!', fileName);
    });
}