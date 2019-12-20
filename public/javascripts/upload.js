const ID = 'AKIAV32ENCU2QAATWXXI';
const SECRET = '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';

const WRITE_BUCKET = 'test-bucket';
const PHOTOS_BUCKET = 'test-bucket';
const MAIN_BUCKET = 'test-bucket';

const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (filePath, bucket, fileName) => {
    // Read content from the file
    var fileContent = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    var params = {
        Bucket: bucket,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
