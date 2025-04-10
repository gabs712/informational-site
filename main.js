const path = require('path')
const express = require('express')

const app = express()
app.listen(8080)

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (_, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (_, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'))
})

app.use((_, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})
