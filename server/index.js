const express = require('express');
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

app.listen(3000)
console.log(`Server on port ${3000}`)
