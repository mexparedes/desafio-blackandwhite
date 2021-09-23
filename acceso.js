const http = require('http')
const fs = require('fs')
const Jimp = require('jimp')
const url = require('url')

http
    .createServer((req, res) => {
        // Paso 1
        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile('index.html', 'utf8', (err, html) => {
                res.end(html)
            })

        }
        if(req.url.includes("/styles.css")){
            fs.readFile("styles.css", (err,data) => {
                res.writeHead(200,{
                    "Content-Type": "text/css",
                });
                res.end(data);
            })
        }
        if(req.url.includes("/procesarImagen")){
            const params = url.parse(req.url, true).query
            //console.log(`url es =${ params.url }`)
           // const urlImagen = querystring.parse(qs).url
            Jimp.read(params.url, (err, imagen) => {
                    imagen
                    .resize(350, Jimp.AUTO)
                    .greyscale()
                    .quality(60)
                    .writeAsync('newImg.jpg')
                    .then(() => {
                        fs.readFile('newImg.jpg', (err, Imagen) => {
                            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                            res.end(Imagen)
                        })
                    })
                })
        
        }
    })
    .listen(3000, () => console.log('Servidor encendido'))