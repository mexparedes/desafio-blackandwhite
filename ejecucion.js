const yargs = require('yargs')
const fs = require('fs')
const child = require('child_process')


const key = 123
const argv = yargs
    .command(
    
        'acceso',
        
        'Comando para acceder al Área 51',
        {
        
            key: {
                describe: 'Contraseña',
                demand: true,
                alias: 'k',
            },
        },
        (args) => {
            // Paso 7
            args.key == key
                ? // Paso 8
                http
                    .createServer(function (req, res) {
                        //console.log(req.url);
                        const url = req.url
                        if (url == '/') {
                            res.writeHead(200, { 'Content-Type': 'text/html' })
                            fs.readFile('index2.html', 'utf8', (err, data) => {
                            res.end(data)
                            //res.end()
                        })
                        }
                        
                    })
                    .listen(8080, () => console.log('Escuchando el puerto 8080'))
                : 
                console.log('Credenciales incorrectas')
        }
    )
    .help().argv