const ID = 'AKIAV32ENCU2QAATWXXI';
const SECRET = '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';

const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({ accessKeyId: ID, secretAccessKey: SECRET });

const s3 = new AWS.S3({
    region: "us-west-2"
});

const uploadFile = (filePath, bucket, fileName) => {
    // Read content from the file
    var fileContent = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    var params = {
        Bucket: bucket,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent,
        Region: "us-west-2"
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

const uploadToS3 = () => {
    var files = require('./public/src/uploadpaths.json');
    for (let i = 0; i < files.paths.length; i++) {
        let obj = files.paths[i];
        let bucketName = obj["bucket"];
        let arr = obj["array"];
        for (let j = 0; j < arr.length; j++) {
            uploadFile(arr[j]["path"], bucketName, arr[j]["name"]);
        }
    }
}

// testing UploadFile()
uploadFile("./public/html/index.html", "madeleinefellows.com", "test");

// below call deploys the static content of maddysite to respective buckets
//uploadToS3();