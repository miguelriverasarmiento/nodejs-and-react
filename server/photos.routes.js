const { Router } = require('express')
//const { uploadFile, readFile } = require('./s3')

const router = Router()

router.get('/', (req, res) => res.send('welcome to server'))

router.post('/upload', (req, res) => { //con AWS S3 se utiliza en la ruta 'upload/:fileName', y async.

    console.log(req.files['photo'].tempFilePath)
    //const result = await uploadFile(req.files['photo'])
    //console.log(result)
    res.send('archivo enviado')
})

/* router.get('/archivo', async (req, res) => {
    try {
        const result = await readFile(req.params.fileName)
        res.send('tu archivo enviado')
    } catch (error) {
        res.send(error.message)
    }    
})*/

module.exports = router
