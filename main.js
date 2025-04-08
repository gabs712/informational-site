import http from 'http'
import fs from 'fs'

http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(204)
      res.end()
      return
    }

    res.writeHead(200, {
      'content-type': 'text/html',
    })

    const urlFile = req.url === '/' ? '/index' : req.url

    fs.readFile('.' + urlFile + '.html', 'utf8', (err, data) => {
      if (err) {
        fs.readFile('./404.html', 'utf8', (_, data) => {
          res.end(data)
        })
        return
      }
      res.end(data)
    })
  })
  .listen(8080)
